import React, { FC } from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { useRecoilState } from "recoil";
import { imageStateValue } from "../../../modules/atom/TextEditor";

const ImageSelector: FC = () => {
  const [imageState, setImageState] = useRecoilState(imageStateValue);

  return (
    <ImageSelectorContainer>
      <HorizontalScroll>
        {[...new Array(13)].map((_, i) => {
          const image = require(`../../../assets/TextEditor/background/bg${
            i + 1
          }.jpg`);

          return (
            <ImageContent
              key={i}
              src={image}
              alt="Image"
              onClick={() => {
                setImageState({
                  ...imageState,
                  url: image,
                });
              }}
            />
          );
        })}
      </HorizontalScroll>
    </ImageSelectorContainer>
  );
};

export default ImageSelector;

const ImageSelectorContainer = styled.div`
  width: 1000px;
  height: 180px;
  border: 1px solid #95e1d3;
  border-radius: 5px;
  margin-top: 60px;
  position: relative;
  overflow: auto;
  padding: 0px 30px;

  & .scroll-horizontal > div {
    display: flex;
    align-items: center;
  }
`;

const ImageContent = styled.img`
  height: 150px;
  position: relative;
  margin-right: 40px;
  cursor: pointer;
`;
