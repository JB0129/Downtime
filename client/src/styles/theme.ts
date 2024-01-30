import { atom } from "recoil";
import { DefaultTheme } from "styled-components";

// 라이트 모드
export const lightTheme: DefaultTheme = {
  value: "light",
  style: {
    headerColor: "rgb(172, 194, 245)",
    backgroundColor: "rgb(210, 223, 254)",
    color: "rgb(0, 0, 0)",
  },
};

// 다크 모드
export const darkTheme: DefaultTheme = {
  value: "dark",
  style: {
    headerColor: "rgb(47, 54, 53)",
    backgroundColor: "rgb(70, 78, 85)",
    color: "rgb(250, 250, 250)",
  },
};

// 다크모드 recoil
export const themeAtom = atom<DefaultTheme>({
  key: "theme",
  default: lightTheme,
});
