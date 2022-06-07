import React, { FC } from "react";
import DefaultButton from "../Buttons/default";
import ImageSelector from "./ImageSelector";
import TextEditor from "./TextEditor";
import styled from "styled-components";

const MakeTextComponent: FC = () => {
  return (
    <Container>
      <MakeTextContent>
        <SaveButtonContainer>
          <DefaultButton
            title="저장하기"
            width={150}
            height={50}
            fontSize={24}
          />
        </SaveButtonContainer>
        <TextEditor />
        <ImageSelector />
      </MakeTextContent>
    </Container>
  );
};

export default MakeTextComponent;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MakeTextContent = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const SaveButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
