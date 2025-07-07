import * as S from "./style.ts";
import { useForm } from "react-hook-form";
import type { LoginFormInputs } from "../../types/auth/login.ts";
import useLogin from "../../hooks/auth/useLogin.ts";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { submit } = useLogin();

  const onSubmit = async (data: LoginFormInputs) => {
    await submit(data);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Sh4reLogo>
          <img src='/sh4reLogo.svg' alt='sh4re logo' />
        </S.Sh4reLogo>
        <S.LoginContainer>
          <S.LoginBox onSubmit={handleSubmit(onSubmit)} autoComplete='none'>
            <S.InputContainer>
              <S.InputBox>
                <S.InputIcon src='/login-user-icon.svg'></S.InputIcon>
                <S.Input
                  placeholder='아이디를 입력하세요.'
                  {...register("username", {
                    required: "아이디를 입력하세요.",
                  })}
                ></S.Input>
              </S.InputBox>
              {errors.username && (
                <span
                  style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}
                >
                  {errors.username.message}
                </span>
              )}
              <S.InputBox>
                <S.InputIcon src='/login-password-icon.svg'></S.InputIcon>
                <S.Input
                  placeholder='비밀번호를 입력하세요.'
                  type='password'
                  {...register("password", {
                    required: "비밀번호를 입력하세요.",
                  })}
                ></S.Input>
              </S.InputBox>
              {errors.username && (
                <span
                  style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}
                >
                  {errors.password?.message}
                </span>
              )}
            </S.InputContainer>
            <S.LoginButtonContainer>
              <S.LoginButton>로그인</S.LoginButton>
              <S.GoogleLoginButton>
                <img src='/google-logo.svg' alt='google logo' />
                구글로 로그인
              </S.GoogleLoginButton>
            </S.LoginButtonContainer>
            <S.AuthBottomContainer>
              <S.AccountSupport>
                아직 계정이 없으신가요?
                <span>
                  <Link to='/register'>회원가입</Link>
                </span>
              </S.AccountSupport>
              <S.AccountSupport>
                비밀번호를 잊어버리셨나요?
                <span>
                  <Link to='/forgot-password'>비밀번호 찾기</Link>
                </span>
              </S.AccountSupport>
            </S.AuthBottomContainer>
          </S.LoginBox>
        </S.LoginContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
