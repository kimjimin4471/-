import { atom } from "recoil";

export type ImageType = {
  width: number;
  height: number;
  radius: number;
  url: string;
};

export const imageStateValue = atom<ImageType>({
  key: "textImage",
  default: {
    width: 600,
    height: 400,
    radius: 0,
    url: "",
  },
});
