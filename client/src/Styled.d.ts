import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    style: {
      bgColor: string;
      header_bgColor: string;
      header_bgColor_hover: string;
      header_bgColor_active: string;
      modal_bgColor: string;
      letter_bgColor_basic: string;
      letter_bgColor_correct: string;
      letter_bgColor_ambiguous: string;
      letter_bgColor_incorrect: string;
      keyboard_bgColor_hover: string;
      keyboard_bgColor_active: string;
      btnBox_bgColor_hover: string;
      btnBox_bgColor_active: string;
      question_bgColor: string;
      question_bgColor_hover: string;
      question_bgColor_active: string;

      textColor: string;
      input_border: string;
      letter_textColor: string;
      msg_textColor: string;

      letter_textShadow: string;

      main_border: string;
      letter_border: string;
      keyboard_border: string;
      btnBox_border: string;
    };
  }
}

// https://pottatt0.tistory.com/entry/React%EC%97%90%EC%84%9C-styled-component-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0-typescript
