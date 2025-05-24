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
  flex: 1;
  justify-content: stretch;
  align-items: stretch;
  width: 60vw;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 15px 0 15px 15px;
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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 50px;
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
  gap: 10px;
  cursor: default;
`;

export const LoginTitle = styled.p`
  font-size: 1.7rem;
  color: #303841;
  font-weight: 500;
`;

export const LoginSubTitle = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputBox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 15px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #b3b3b3;
  box-sizing: border-box;
  font-weight: 350;
  padding: 0 0 0 40px;
  border-radius: 10px;
  border-color: #b3b3b3;
  color: #303841;
  &::placeholder {
    color: #b3b3b3;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #303841;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const ForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ForgetPassword = styled.a`
  font-size: 0.8rem;
  color: #5d5d5d;
  cursor: pointer;
`;
