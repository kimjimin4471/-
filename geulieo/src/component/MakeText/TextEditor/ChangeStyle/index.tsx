import React, { FC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { imageStateValue } from "../../../../modules/atom/TextEditor";
import BorderRadiusIcon from "../../../../assets/TextEditor/BorderRadiusIcon.svg";
import DeleteIcon from "../../../../assets/TextEditor/DeleteIcon.svg";

const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;

const ChangeStyle: FC = () => {
  const [imageState, setImageState] = useRecoilState(imageStateValue);

  return (
    <Container>
      <Title>이미지</Title>
      <SettingOption>
        <SettingOptionRow>
          <div>
            <Key>w</Key>
            <ValueInput
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
            <Key>h</Key>
            <ValueInput
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
        </SettingOptionRow>
        <SettingOptionRow>
          <div>
            <Key>
              <img src={BorderRadiusIcon} alt="BorderRadius" />
            </Key>
            <ValueInput
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
        </SettingOptionRow>
      </SettingOption>
      <DeleteButton
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
    </Container>
  );
};

const Container = styled.div`
  width: 150px;
  height: 135px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  color: #b8b8b8;
`;

const SettingOption = styled.div`
  width: 100%;
`;

const SettingOptionRow = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Key = styled.span`
  font-size: 14px;
  font-family: "Roboto";
  color: #b3b3b3;
  margin-right: 7px;
`;

const ValueInput = styled.input`
  width: 40px;
  font-family: "Roboto";
  font-size: 14px;
  color: black;
  outline: none;
  border: none;
`;

const DeleteButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 12px;
  cursor: pointer;
  align-self: center;
`;

export default ChangeStyle;
