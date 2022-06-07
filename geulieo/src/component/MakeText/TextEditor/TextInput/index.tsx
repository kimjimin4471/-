import React, { FC } from "react";
import styled from "styled-components";
import AddIcon from "../../../../assets/TextEditor/AddIcon.svg";

const TextInput: FC = () => {
  return (
    <Container>
      <Input placeholder="텍스트를 입력하세요." />
      <AddButton src={AddIcon} alt="add button" />
    </Container>
  );
};

const Container = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  margin-top: 65px;
  padding: 15px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  color: black;
  &::placeholder {
    color: #78958f;
  }
  border: none;
  outline: none;
`;

const AddButton = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 20px;
  align-self: center;
  cursor: pointer;
`;

export default TextInput;
