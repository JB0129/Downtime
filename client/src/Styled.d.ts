import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    style: {
      header_backgroundColor: string;
      backgroundColor: string;
      modal_backgroundColor: string;
      color: string;
      main_border: string;
      wordle_letter_backgroundColor: string;
    };
  }
}

// declare module "styled-components" {
//   export interface DefaultTheme {
//     textColor: string;
//     bgColor: string;
//     accentColor: string;
//   }
// }

// https://pottatt0.tistory.com/entry/React%EC%97%90%EC%84%9C-styled-component-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0-typescript
