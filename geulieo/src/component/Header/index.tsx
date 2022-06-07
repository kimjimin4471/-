import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/logo.svg";

const Header: FC = () => {
  return (
    <Container>
      <Content>
        <Link
          to="/"
          style={{
            height: "32px",
          }}
        >
          <Logo src={logo} alt="logo" />
        </Link>
        <NavContainer>
          <Link to="/collection" style={{ marginRight: "50px" }}>
            <NavContent>글귀모음</NavContent>
          </Link>
          <Link to="/make">
            <NavContent>글귀제작</NavContent>
          </Link>
        </NavContainer>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & img {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavContent = styled.a`
  font-size: 16px;
  color: #95e1d3;
  cursor: pointer;

  & + & {
    margin-left: 30px;
  }
`;

const Logo = styled.img`
  height: 32px;
`;
