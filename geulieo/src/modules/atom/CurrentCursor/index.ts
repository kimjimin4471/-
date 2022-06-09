import { atom } from "recoil";

export const currentCursorStateValue = atom<number>({
  key: "currentCursor",
  default: 0,
});
