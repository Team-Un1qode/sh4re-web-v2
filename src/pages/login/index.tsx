import * as S from "./index.style.ts";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.BackgroundWrapper>
        <S.Background />
      </S.BackgroundWrapper>
      <S.LoginContainer>
        <S.LoginBox onSubmit={handleSubmit(onSubmit)}>
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
          <S.ForgetPasswordContainer>
            <S.ForgetPassword>비밀번호를 잊어버리셨나요?</S.ForgetPassword>
          </S.ForgetPasswordContainer>
        </S.LoginBox>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
