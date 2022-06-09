import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentCursorStateValue } from "../../../../modules/atom/CurrentCursor";
import ChangeImage from "./ChangeImage";
import ChangeText from "./ChangeText";

const ChangeStyle: FC = () => {
  const currentCursor = useRecoilValue(currentCursorStateValue);
  console.log(currentCursor);

  return (
    <Container>
      {currentCursor >= 0 ? <ChangeText /> : <ChangeImage />}
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

export default ChangeStyle;
