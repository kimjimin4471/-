import React, { FC } from "react";
import * as S from "./style";
import DeleteIcon from "../../../../assets/TextEditor/DeleteIcon.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { textStateValue } from "../../../../modules/atom/Text";
import { currentCursorStateValue } from "../../../../modules/atom/CurrentCursor";
import { imageStateValue } from "../../../../modules/atom/TextEditor";

const ChangeText: FC = () => {
  const [textState, setTextState] = useRecoilState(textStateValue);
  const [currentCursor, setCurrentCursor] = useRecoilState(
    currentCursorStateValue
  );
  const imageState = useRecoilValue(imageStateValue);

  const onChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (imageState.width < value || value < 0) return;
    const copyArr = [...textState];
    copyArr[currentCursor] = {
      ...copyArr[currentCursor],
      x: value,
    };
    setTextState(copyArr);
  };

  const onChangeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (imageState.height < value || value < 0) return;
    const copyArr = [...textState];
    copyArr[currentCursor] = {
      ...copyArr[currentCursor],
      y: value,
    };
    setTextState(copyArr);
  };

  const onChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 0) return;
    const copyArr = [...textState];
    copyArr[currentCursor] = {
      ...copyArr[currentCursor],
      fontSize: parseInt(e.target.value),
    };
    setTextState(copyArr);
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyArr = [...textState];
    copyArr[currentCursor] = {
      ...copyArr[currentCursor],
      color: e.target.value,
    };
    setTextState(copyArr);
  };

  const deleteText = () => {
    const index = currentCursor;
    setCurrentCursor(-1);
    setTextState(textState.filter((v, i) => i !== index));
  };

  return (
    <>
      <S.Title>텍스트</S.Title>
      <S.SettingOption>
        <S.SettingOptionRow>
          <div>
            <S.Key>x</S.Key>
            <S.ValueInput
              type={"number"}
              value={textState[currentCursor].x}
              onChange={onChangeX}
            />
          </div>
          <div>
            <S.Key>y</S.Key>
            <S.ValueInput
              type={"number"}
              value={textState[currentCursor].y}
              onChange={onChangeY}
            />
          </div>
        </S.SettingOptionRow>
        <S.SettingOptionRow>
          <div>
            <S.Key>size</S.Key>
            <S.ValueInput
              type={"number"}
              value={textState[currentCursor].fontSize}
              onChange={onChangeFontSize}
            />
          </div>
        </S.SettingOptionRow>
        <S.FontColorContainer>
          <S.Color color={textState[currentCursor].color} />
          <S.ColorInput
            type={"color"}
            value={textState[currentCursor].color}
            onChange={onChangeColor}
          />
        </S.FontColorContainer>
      </S.SettingOption>
      <S.DeleteButton
        src={DeleteIcon}
        alt="delete button"
        onClick={deleteText}
      />
    </>
  );
};

export default ChangeText;
