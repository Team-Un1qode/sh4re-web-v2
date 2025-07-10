import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainBlue: string;
      mainRed: string;
      mainOrange: string;
      mainGreen: string;
      lightBlack: string;
      selectedWhite: string;
      backgroundWhite: string;
      background: string;
      buttonBlack: string;
      mainText: string;
      selectText: string;
      buttonText: string;
      buttonBlue: string;
      placeholder: string;
      borderGray: string;
      gray: string;
      darkgray: string;
    };
  }
}
