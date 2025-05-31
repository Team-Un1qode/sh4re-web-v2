import * as S from "./style.ts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSignUp from "../../hooks/auth/useRegister.ts";
import type { RegisterFormInputs } from "../../types/auth/register.ts";
import GradeSelect from "../../components/common/auth/registerSelect/gradeSelect/index.tsx";
import ClassSelect from "../../components/common/auth/registerSelect/classSelect/index.tsx";

const Register = () => {
  const [grade, setGrade] = useState("");
  const [classNumber, setClassNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const { submit } = useSignUp();

  const onSubmit = async (data: RegisterFormInputs) => {
    await submit({
      ...data,
      grade: Number(grade),
      classNumber: Number(classNumber),
      studentNumber: Number(data.studentNumber),
    });
  };

  return (
    <S.Container>
      <S.BackgroundWrapper>
        <S.Background />
      </S.BackgroundWrapper>
      <S.RegisterContainer>
        <S.RegisterBox onSubmit={handleSubmit(onSubmit)}>
          <S.Header>
            <S.RegisterTitle>회원가입</S.RegisterTitle>
            <S.RegisterSubTitle>
              서비스를 시작하려면 회원가입하세요.
            </S.RegisterSubTitle>
          </S.Header>
          <S.InputContainer>
            <S.InputBox>
              <S.InputIcon src='/login-user-icon.svg' />
              <S.Input
                placeholder='아이디를 입력하세요.'
                {...register("username", { required: "아이디를 입력하세요." })}
              />
            </S.InputBox>
            {errors.username && (
              <span
                style={{ color: "red", fontSize: "0.85rem", marginLeft: "5px" }}
              >
                {errors.username.message}
              </span>
            )}
            <S.InputBox>
              <S.InputIcon src='/login-password-icon.svg' />
              <S.Input
                placeholder='비밀번호를 입력하세요.'
                type='password'
                {...register("password", {
                  required: "비밀번호를 입력하세요.",
                })}
              />
            </S.InputBox>
            {errors.password && (
              <span
                style={{ color: "red", fontSize: "0.85rem", marginLeft: "5px" }}
              >
                {errors.password.message}
              </span>
            )}
            <S.InputBox>
              <S.InputIcon src='/register-school-icon.svg' />
              <S.Input
                placeholder='학교코드'
                type='text'
                {...register("schoolCode", {
                  required: "학교코드를 입력하세요.",
                })}
              />
            </S.InputBox>
            <S.SmallInputBox>
              <GradeSelect
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
              <ClassSelect
                value={classNumber}
                onChange={(e) => setClassNumber(e.target.value)}
              />
              <S.SmallInput
                placeholder='번호'
                {...register("studentNumber", {
                  required: "번호",
                })}
              />
            </S.SmallInputBox>
          </S.InputContainer>
          <S.RegisterButton>회원가입</S.RegisterButton>
          <S.ForgetPasswordContainer>
            <S.ForgetPassword>계정이 있으신가요?</S.ForgetPassword>
          </S.ForgetPasswordContainer>
        </S.RegisterBox>
      </S.RegisterContainer>
    </S.Container>
  );
};

export default Register;
