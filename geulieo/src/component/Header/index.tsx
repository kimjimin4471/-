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

const Logo = styled.img`
  height: 32px;
`;
