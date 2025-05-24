import * as S from "./index.style.ts";

const Login = () => {
  return (
    <S.Container>
      <S.BackgroundWrapper>
        <S.Background />
      </S.BackgroundWrapper>
      <S.LoginContainer>
        <S.LoginBox>
          <S.Header>
            <S.LoginTitle>로그인</S.LoginTitle>
            <S.LoginSubTitle>서비스를 시작하려면 로그인하세요.</S.LoginSubTitle>
          </S.Header>
          <S.InputContainer>
            <S.InputBox>
              <S.InputIcon src='/login-user-icon.svg'></S.InputIcon>
              <S.Input placeholder='이메일주소를 입력하세요.'></S.Input>
            </S.InputBox>
            <S.InputBox>
              <S.InputIcon src='/login-password-icon.svg'></S.InputIcon>
              <S.Input placeholder='비밀번호를 입력하세요.'></S.Input>
            </S.InputBox>
          </S.InputContainer>
          <S.LoginButton>로그인</S.LoginButton>
          <S.ForgetPasswordContainer>
            <S.ForgetPassword>비밀번호를 잊어버리셨나요?</S.ForgetPassword>
          </S.ForgetPasswordContainer>
        </S.LoginBox>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
