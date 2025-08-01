import styled from "styled-components";
import type { SelectProps } from "../../types/select/selectProps";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75%;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 30vh;
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;

export const RegisterBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

export const Sh4reLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  img {
    width: 20rem;
    height: 8rem;
    flex-shrink: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
`;

export const InputBox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 15px;
  margin-bottom: 3px;
  user-select: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme }) => theme.color.mainText};
  user-select: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.mainBlue};
  }
`;

export const SmallInputBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

export const SmallInput = styled.input`
  flex: 1;
  height: 50px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme }) => theme.color.mainText};
  user-select: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.mainBlue};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;

export const Select = styled.select<SelectProps>`
  flex: 1;
  height: 50px;
  width: 100%;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.placeholder : theme.color.mainText};
  user-select: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.mainBlue};
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.buttonBlack};
  color: ${({ theme }) => theme.color.buttonText};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
`;

export const GoogleRegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme }) => theme.color.mainText};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const AuthBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 14px;
  margin-top: 12px;
`;

export const AccountSupport = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.placeholder};
  user-select: none;
  span {
    margin-left: 4px;
    a {
      color: ${({ theme }) => theme.color.mainBlue};
      text-decoration: underline;
      font-weight: 500;
    }
  }
`;

export const PreviousButton = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.placeholder};
  cursor: pointer;
`;
