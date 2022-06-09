import { atom } from "recoil";

export type TextType = {
  color: string;
  value: string;
  fontSize: number;
  align: string;
  x: number;
  y: number;
};

export const textStateValue = atom<TextType[]>({
  key: "textArray",
  default: [],
});
