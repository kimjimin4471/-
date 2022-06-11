import React, { FC, memo } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentCursorStateValue } from "../../../../modules/atom/CurrentCursor";
import { TextType } from "../../../../modules/atom/Text";

interface Props extends TextType {
  index: number;
}

const TextView: FC<Props> = memo(
  ({ color, value, fontSize, align, x, y, index }) => {
    const setCurrentCursor = useSetRecoilState(currentCursorStateValue);

    const changeCurrentCursor = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (e.target === e.currentTarget) setCurrentCursor(index);
    };

    return (
      <Text
        color={color}
        fontSize={fontSize}
        x={x}
        y={y}
        align={align}
        onClick={changeCurrentCursor}
      >
        {value}
      </Text>
    );
  }
);

const Text = styled.span<{
  color: string;
  fontSize: number;
  align: string;
  x: number;
  y: number;
}>`
  position: absolute;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;

export default TextView;
