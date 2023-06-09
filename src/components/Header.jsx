import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-column-gap: 20px;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 30px;
  padding: 10px 15px;
  svg {
    margin-top: 10px;
    display: inline-block;
    float: left;
  }
  span {
    display: inline-block;
    padding-left: 5px;
    padding-top: 16px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  b {
    font-weight: bold;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid gray;
  padding: 10px 6px;
  border-radius: 4px;
  margin-top: 17px;
  background: rgba(0, 0, 0, 0.1);
`;

const ProfileLink = styled(Link)`
  color: white;
  padding: 0 12px;
  text-decoration: none;
  line-height: 50px;
`;

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledHeader>
      <LogoLink to={"/"} className="logo">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <span>
          {" "}
          Stack <b>OverFlow</b>{" "}
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput type="text" placeholder="Search..." />
      </form>
      {user && (
        <ProfileLink to={"/profile"} className="profile">
          Donatas
        </ProfileLink>
      )}
      {!user && (
        <div>
          <ProfileLink to={"/login"} className="profile">
            Log In
          </ProfileLink>
          <ProfileLink to={"/register"} className="profile">
            Register
          </ProfileLink>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;


