import React, { FC } from "react";
import DefaultButton from "../Buttons/default";
import ImageContainer from "./ImageContainer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main: FC = () => {
  const navigate = useNavigate();

  const onClickMake = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/make");
  };

  return (
    <Wrapper>
      <Title>
        당신의 마음속 소리,
        <br />
        <strong>글이어</strong>에서 글귀로 표현해보세요.
      </Title>
      <ImageWrapper>
        <ImageContainer />
      </ImageWrapper>
      <ButtonContainer>
        <DefaultButton
          title="제작하기"
          width={200}
          height={60}
          fontSize={22}
          onClickFunction={onClickMake}
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.section`
  width: 100vw;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 48px;
  & strong {
    color: #95e1d3;
  }
`;

const ImageWrapper = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
  margin-top: 60px;
`;

const ButtonContainer = styled.div`
  margin-top: 80px;
`;
