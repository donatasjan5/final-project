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
      setIsLoginFailed(false); // Nustato, kad prisijungimas pavyko
      navigate("/");
    } else {
      setIsLoggedIn(false);
      setIsLoginFailed(true); // Nustato, kad prisijungimas nepavyko
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginFailed(false); // Nustato, kad prisijungimo klaida nebepasirodo po atsijungimo
  };

  return (
    <Container>
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
          <BlueButton onClick={handleLogin}>Login</BlueButton>
        </div>
      )}
    </Container>
  );
};

export default LoginPage;
