import React, { FC, memo } from "react";
import styled from "styled-components";
import { TextType } from "../../../../modules/atom/Text";

const TextView: FC<TextType> = memo(
  ({ color, value, fontSize, align, x, y }) => {
    return (
      <Text color={color} fontSize={fontSize} x={x} y={y} align={align}>
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
