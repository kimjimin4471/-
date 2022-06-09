import React, { FC } from "react";
import * as S from "./style";
import DeleteIcon from "../../../../assets/TextEditor/DeleteIcon.svg";
import AlignLeftIcon from "../../../../assets/TextEditor/allignIcon/AlignLeftIcon.svg";
import AlignCenterIcon from "../../../../assets/TextEditor/allignIcon/AlignCenterIcon.svg";
import AlignRightIcon from "../../../../assets/TextEditor/allignIcon/AlignRightIcon.svg";

const ChangeText: FC = () => {
  return (
    <>
      <S.Title>텍스트</S.Title>
      <S.SettingOption>
        <S.SettingOptionRow>
          <div>
            <S.Key>x</S.Key>
            <S.ValueInput type={"number"} />
          </div>
          <div>
            <S.Key>y</S.Key>
            <S.ValueInput type={"number"} />
          </div>
        </S.SettingOptionRow>
        <S.SettingOptionRow>
          <S.AlignContainer>
            <S.AlignIcon src={AlignLeftIcon} alt="textAlign Left" />
            <S.AlignIcon src={AlignCenterIcon} alt="textAlign Center" />
            <S.AlignIcon src={AlignRightIcon} alt="textAlign Right" />
          </S.AlignContainer>
          <div>
            <S.Key>size</S.Key>
            <S.ValueInput type={"number"} />
          </div>
        </S.SettingOptionRow>
        <S.FontColorContainer>
          <S.Color />
          <S.ColorInput maxLength={6} />
        </S.FontColorContainer>
      </S.SettingOption>
      <S.DeleteButton src={DeleteIcon} alt="delete button" />
    </>
  );
};

export default ChangeText;
