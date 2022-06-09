import React, { FC } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { imageStateValue } from "../../../../modules/atom/TextEditor";
import BorderRadiusIcon from "../../../../assets/TextEditor/BorderRadiusIcon.svg";
import DeleteIcon from "../../../../assets/TextEditor/DeleteIcon.svg";

const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;

const ChangeImage: FC = () => {
  const [imageState, setImageState] = useRecoilState(imageStateValue);

  return (
    <>
      <S.Title>이미지</S.Title>
      <S.SettingOption>
        <S.SettingOptionRow>
          <div>
            <S.Key>w</S.Key>
            <S.ValueInput
              type={"number"}
              value={imageState.width}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > MAX_WIDTH || value <= 0) return;
                setImageState({ ...imageState, width: value });
              }}
            />
          </div>
          <div>
            <S.Key>h</S.Key>
            <S.ValueInput
              type={"number"}
              value={imageState.height}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > MAX_HEIGHT || value <= 0) return;
                setImageState({
                  ...imageState,
                  height: value,
                });
              }}
            />
          </div>
        </S.SettingOptionRow>
        <S.SettingOptionRow>
          <div>
            <S.Key>
              <img src={BorderRadiusIcon} alt="BorderRadius" />
            </S.Key>
            <S.ValueInput
              type={"number"}
              value={imageState.radius}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                const maxRadius =
                  imageState.width > imageState.height
                    ? imageState.height / 2
                    : imageState.width / 2;
                if (value > maxRadius || value < 0) return;
                setImageState({
                  ...imageState,
                  radius: value,
                });
              }}
            />
          </div>
        </S.SettingOptionRow>
      </S.SettingOption>
      <S.DeleteButton
        src={DeleteIcon}
        alt="delete button"
        onClick={() => {
          setImageState({
            url: "",
            width: 600,
            height: 400,
            radius: 0,
          });
        }}
      />
    </>
  );
};

export default ChangeImage;
