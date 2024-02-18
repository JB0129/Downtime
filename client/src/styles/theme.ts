import { atom } from "recoil";
import { DefaultTheme } from "styled-components";

// 라이트 모드
export const lightTheme: DefaultTheme = {
  value: "light",
  style: {
    header_backgroundColor: "rgb(172, 194, 245)",
    backgroundColor: "rgb(210, 223, 254)",
    modal_backgroundColor: "rgb(250, 250, 250)",
    color: "rgb(0, 0, 0)",
    main_border: "rgb(0, 0, 0)",
    wordle_letter_backgroundColor: "rgb(250, 250, 250)",
  },
};

// 다크 모드
export const darkTheme: DefaultTheme = {
  value: "dark",
  style: {
    header_backgroundColor: "rgb(47, 54, 53)",
    backgroundColor: "rgb(70, 78, 85)",
    modal_backgroundColor: "rgb(50, 54, 53)",
    color: "rgb(250, 250, 250)",
    main_border: "rgb(250, 250, 250)",
    wordle_letter_backgroundColor: "rgb(70, 78, 85)",
  },
};

// 다크모드 recoil
export const themeAtom = atom<DefaultTheme>({
  key: "theme",
  default: darkTheme,
});
