import React, { FC } from "react";
import * as S from "./style";

const Image1 = require("../../../assets/main/image1.png");
const Image2 = require("../../../assets/main/image2.png");
const Image3 = require("../../../assets/main/image3.png");
const Image4 = require("../../../assets/main/image4.png");
const Image5 = require("../../../assets/main/image5.png");
const Image6 = require("../../../assets/main/image6.png");

const ImageContainer: FC = () => {
  return (
    <>
      <S.Image6 src={Image6} alt="Image" />
      <S.Image5 src={Image5} alt="Image" />
      <S.Image4 src={Image4} alt="Image" />
      <S.Image3 src={Image3} alt="Image" />
      <S.Image2 src={Image2} alt="Image" />
      <S.Image1 src={Image1} alt="Image" />
    </>
  );
};

export default ImageContainer;
