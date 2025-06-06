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
      buttonBlack: string;
      mainText: string;
      placeholder: string;
      borderGray: string;
    };
  }
}
