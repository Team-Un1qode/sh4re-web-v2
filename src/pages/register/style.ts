import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px 0 20px 20px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Background = styled.div`
  background-image: url("/login-background-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
  padding: 0 150px;
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

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: default;
`;

export const RegisterTitle = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.color.dark};
  font-weight: 500;
  user-select: none;
`;

export const RegisterSubTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 400;
  user-select: none;
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
`;

export const SmallInputBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 15px;
  margin-bottom: 2px;
  user-select: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 40px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.dark};
  user-select: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.main};
  }
`;

export const SmallInput = styled.input`
  flex: 1;
  height: 50px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 20px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.dark};
  user-select: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.main};
  }
`;

export const Select = styled.select`
  flex: 1;
  height: 50px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 20px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.dark};
  user-select: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.main};
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.dark};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const AccountPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
`;

export const AccountPrompt = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.grey};
  user-select: none;
  span {
    margin-left: 4px;
    a {
      color: ${({ theme }) => theme.color.main};
      text-decoration: underline;
      font-weight: 500;
    }
  }
`;
