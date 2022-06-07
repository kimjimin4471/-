import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  width: number;
  height: number;
  fontSize: number;
}

const DefaultButton: FC<Props> = ({
  title,
  onClickFunction,
  width,
  height,
  fontSize,
}) => {
  return (
    <DefaultButtonContainer
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClickFunction ? onClickFunction : undefined}
    >
      {title}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;

const DefaultButtonContainer = styled.button<{
  width: number;
  height: number;
  fontSize: number;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  border-radius: 10px;
  background-color: #95e1d3;
  color: white;
  border: none;
  cursor: pointer;
`;
