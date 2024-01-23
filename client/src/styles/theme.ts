import { atom } from "recoil";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  value: "light",
  style: {
    backgroundColor: "#ffffff",
    color: "#343a40",
  },
};

export const darkTheme: DefaultTheme = {
  value: "dark",
  style: {
    backgroundColor: "#343a40",
    color: "#ffffff",
  },
};

export const themeAtom = atom<DefaultTheme>({
  key: "theme",
  default: lightTheme,
});

// export const darkTheme: DefaultTheme = {
//   bgColor: "#353b48",
//   textColor: "black",
//   accentColor: "#487eb0",
// };
// export const lightTheme: DefaultTheme = {
//   bgColor: "#f5f6fa",
//   textColor: "#353b48",
//   accentColor: "#487eb0",
// };

// 출처: https://memostack.tistory.com/334 [memostack:티스토리]
