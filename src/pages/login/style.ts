import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  width: 400px;
  height: 100%;
  padding: 0 150px;
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  img {
    width: 19.875rem;
    height: 7.73438rem;
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

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
`;

export const LoginButton = styled.button`
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

export const GoogleLoginButton = styled.button`
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
  font-size: 1rem;
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
