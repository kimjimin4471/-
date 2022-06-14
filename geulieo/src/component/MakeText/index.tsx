import React, { FC, useRef } from "react";
import DefaultButton from "../Buttons/default";
import ImageSelector from "./ImageSelector";
import TextEditor from "./TextEditor";
import styled from "styled-components";
import html2canvas from "html2canvas";

const MakeTextComponent: FC = () => {
  const printRef = useRef();

  const saveImage = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <Container>
      <MakeTextContent>
        <SaveButtonContainer>
          <DefaultButton
            title="저장하기"
            width={150}
            height={50}
            fontSize={24}
            onClickFunction={saveImage}
          />
        </SaveButtonContainer>
        <TextEditor ref={printRef} />
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
