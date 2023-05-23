import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import BlueButton from "./BlueButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 30px 20px;
`;

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "donatasjan5@gmail.com" && password === "password") {
      setIsLoggedIn(true);
      setIsLoginFailed(false); // prisijungimas pavyko
      navigate("/"); 
    } else {
      setIsLoggedIn(false);
      setIsLoginFailed(true); // prisijungimas nepavyko
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginFailed(false); // Klaida prisijungiant
  };

  return (
    <Container>
      <h1 style={{ marginBottom: "15px", fontSize: "20px" }}>Login</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          {isLoginFailed && <p>You entered wrong email or password. </p>}
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
          <BlueButton onClick={handleLogin}>
            {isLoggedIn ? "Log Out" : "Log In"}
          </BlueButton>
        </div>
      )}
    </Container>
  );
};

export default LoginPage;
