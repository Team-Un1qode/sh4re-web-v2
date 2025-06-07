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
    <S.Container>
      <S.BackgroundWrapper>
        <S.Background />
      </S.BackgroundWrapper>
      <S.LoginContainer>
        <S.LoginBox onSubmit={handleSubmit(onSubmit)} autoComplete='none'>
          <S.Header>
            <S.LoginTitle>로그인</S.LoginTitle>
            <S.LoginSubTitle>서비스를 시작하려면 로그인하세요.</S.LoginSubTitle>
          </S.Header>
          <S.InputContainer>
            <S.InputBox>
              <S.InputIcon src='/login-user-icon.svg'></S.InputIcon>
              <S.Input
                placeholder='아이디를 입력하세요.'
                {...register("username", { required: "아이디를 입력하세요." })}
              ></S.Input>
            </S.InputBox>
            {errors.username && (
              <span
                style={{ color: "red", fontSize: "0.85rem", marginLeft: "5px" }}
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
                style={{ color: "red", fontSize: "0.85rem", marginLeft: "5px" }}
              >
                {errors.password?.message}
              </span>
            )}
          </S.InputContainer>
          <S.LoginButton>로그인</S.LoginButton>
          <S.AuthBottomContainer>
            <S.AccountPrompt>
              아직 계정이 없으신가요?
              <span>
                <Link to='/register'>회원가입</Link>
              </span>
            </S.AccountPrompt>
            <S.ForgotPasswordLink href='/forgot-password'>
              비밀번호를 잊어버리셨나요?
            </S.ForgotPasswordLink>
          </S.AuthBottomContainer>
        </S.LoginBox>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
