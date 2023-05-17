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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Patikrinkite prisijungimo duomenis ir nustatykite isLoggedIn būseną
    if (email === "donatasjan5@gmail.com" && password === "password") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    // Atsijungimo veiksmai
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <div>
          <p>Jūs esate prisijungęs.</p>
          <button onClick={handleLogout}>Atsijungti</button>
        </div>
      ) : (
        <div>
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
