import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import AddIcon from "../../../../assets/TextEditor/AddIcon.svg";
import { textStateValue } from "../../../../modules/atom/Text";

const TextInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const setTextState = useSetRecoilState(textStateValue);

  const addText = () => {
    const textInputValue = {
      color: "#ffffff",
      value: inputValue,
      fontSize: 16,
      align: "center",
      x: 0,
      y: 0,
    };
    setTextState((textState) => [...textState, textInputValue]);
    setInputValue("");
  };

  return (
    <Container>
      <Input
        placeholder="텍스트를 입력하세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AddButton src={AddIcon} alt="add button" onClick={addText} />
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
