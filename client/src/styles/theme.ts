import { atom } from "recoil";
import { DefaultTheme } from "styled-components";

// 다크 모드
export const darkTheme: DefaultTheme = {
  value: "dark",
  style: {
    bgColor: "rgb(70, 78, 85)",
    header_bgColor: "rgb(47, 54, 53)",
    header_bgColor_hover: "rgb(53, 60, 67)",
    header_bgColor_active: "rgb(51, 60, 69)",
    modal_bgColor: "rgb(50, 54, 53)",
    letter_bgColor_basic: "rgb(70, 78, 85)",
    letter_bgColor_correct: "rgb(253, 126, 149)",
    letter_bgColor_ambiguous: "rgb(239, 226, 87)",
    letter_bgColor_incorrect: "rgb(143, 143, 143)",
    keyboard_bgColor_hover: "rgb(57, 63, 68)",
    keyboard_bgColor_active: "rgb(49, 55, 58)",
    btnBox_bgColor_hover: "rgb(80, 80, 80)",
    btnBox_bgColor_active: "rgb(74, 74, 74)",
    question_bgColor: "rgb(235, 235, 235)",
    question_bgColor_hover: "rgb(200, 200, 200)",
    question_bgColor_active: "rgb(185, 185, 185)",

    textColor: "rgb(250, 250, 250)",
    letter_textColor: "rgb(250, 250, 250)",
    msg_textColor: "rgb(255, 125, 125)",

    letter_textShadow: "rgb(0, 0, 0)",

    main_border: "rgb(250, 250, 250)",
    input_border: "rgb(255, 255, 255)",
    letter_border: "rgba(255, 255, 255, 0.456)",
    keyboard_border: "rgb(255, 255, 255)",
    btnBox_border: "rgb(80, 80, 80)",
  },
};

// 라이트 모드
export const lightTheme: DefaultTheme = {
  value: "light",
  style: {
    bgColor: "rgb(210, 223, 254)",

    header_bgColor: "rgb(172, 194, 245)",
    header_bgColor_hover: "rgb(155, 183, 246)",
    header_bgColor_active: "rgb(144, 175, 249)",
    modal_bgColor: "rgb(250, 250, 250)",
    letter_bgColor_basic: "rgb(250, 250, 250)",
    letter_bgColor_correct: "rgb(250, 146, 165)",
    letter_bgColor_ambiguous: "rgb(238, 225, 89)",
    letter_bgColor_incorrect: "rgb(143, 143, 143)",
    keyboard_bgColor_hover: "rgb(230, 230, 230)",
    keyboard_bgColor_active: "rgb(209, 209, 209)",
    btnBox_bgColor_hover: "rgb(213, 213, 213)",
    btnBox_bgColor_active: "rgb(188, 188, 188)",
    question_bgColor: "rgb(92, 92, 92)",
    question_bgColor_hover: "rgb(168, 168, 168)",
    question_bgColor_active: "rgb(130, 130, 130)",

    textColor: "rgb(0, 0, 0)",
    input_border: "rgb(179, 179, 179)",
    letter_textColor: "rgb(255, 255, 255)",
    msg_textColor: "rgb(250, 100, 100)",

    letter_textShadow: "rgb(250, 250, 250)",

    main_border: "rgb(89, 89, 89)",
    letter_border: "rgba(69, 69, 69, 0.174)",
    keyboard_border: "rgb(146, 146, 146)",
    btnBox_border: "rgb(210, 210, 210)",
  },
};

// 다크모드 recoil
export const themeAtom = atom<DefaultTheme>({
  key: "theme",
  default: darkTheme,
});
