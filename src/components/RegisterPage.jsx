import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import BlueButton from "./BlueButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 30px 20px;
`;

const RegisterPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (email.includes("@") && password === passwordConfirmation) {
      setIsLoggedIn(true);
      setIsLoginFailed(false);

      const registrationData = {
        email,
        password,
        passwordConfirmation,
      };

      console.log(registrationData);

      try {
        const response = await fetch("http://localhost:8000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          navigate("/login");
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error("Failed to register");
      }
    } else {
      setIsLoggedIn(false);
      setIsLoginFailed(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginFailed(false);
  };

  return (
    <Container>
      <h1 style={{ marginBottom: "15px", fontSize: "20px" }}>Register</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          {isLoginFailed && <p>You entered wrong email or password </p>}
          <Input
            placeholder={"email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder={"password confirmation"}
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <BlueButton onClick={handleRegister}>Register</BlueButton>
        </div>
      )}
    </Container>
  );
};

export default RegisterPage;
