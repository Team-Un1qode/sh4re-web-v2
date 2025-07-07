import * as S from "./style.ts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useRegister from "../../hooks/auth/useRegister.ts";
import type { RegisterFormInputs } from "../../types/auth/register.ts";
import GradeSelect from "../../components/common/auth/registerSelect/gradeSelect/index.tsx";
import ClassSelect from "../../components/common/auth/registerSelect/classSelect/index.tsx";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      schoolCode: "",
      name: "",
      classNo: 0,
      studentNo: 0,
      grade: 0,
    },
  });

  const { submit } = useRegister();

  const gradeValue = watch("grade");
  const classNoValue = watch("classNo");

  const nextStep = () => setStep(2);
  const previousStep = () => setStep(1);

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log("submitData", data);
    await submit(data);
  };

  const renderStep1 = () => (
    <S.InputContainer>
      <S.InputBox>
        <S.InputIcon src='/login-user-icon.svg' />
        <S.Input
          placeholder='아이디를 입력하세요.'
          {...register("username", {
            required: "아이디를 입력하세요.",
          })}
        />
      </S.InputBox>
      <S.InputBox>
        <S.InputIcon src='/email-icon.svg' />
        <S.Input
          placeholder='이메일을 입력하세요.'
          type='email'
          {...register("email", {
            required: "이메일을 입력하세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "올바른 이메일 형식을 입력하세요.",
            },
          })}
        />
      </S.InputBox>
      <S.InputBox>
        <S.InputIcon src='/login-password-icon.svg' />
        <S.Input
          placeholder='비밀번호를 입력하세요.'
          type='password'
          {...register("password", {
            required: "비밀번호를 입력하세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
          })}
        />
      </S.InputBox>
      <S.InputBox>
        <S.InputIcon src='/login-password-icon.svg' />
        <S.Input
          placeholder='비밀번호 확인'
          type='password'
          {...register("passwordConfirm", {
            required: "비밀번호를 다시 입력하세요.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
        />
      </S.InputBox>
      <S.RegisterButton type='button' onClick={nextStep}>
        다음
      </S.RegisterButton>
    </S.InputContainer>
  );

  const renderStep2 = () => (
    <S.InputContainer>
      <S.InputBox>
        <S.InputIcon src='/login-user-icon.svg' />
        <S.Input
          placeholder='이름을 입력하세요.'
          {...register("name", { required: "이름을 입력하세요." })}
        />
      </S.InputBox>
      <S.InputBox>
        <S.InputIcon src='/register-school-icon.svg' />
        <S.Input
          placeholder='학교코드를 입력하세요.'
          type='text'
          {...register("schoolCode", {
            required: "학교코드를 입력하세요.",
          })}
        />
      </S.InputBox>
      <S.SmallInputBox>
        <GradeSelect
          value={String(gradeValue || "")}
          onChange={(e) => setValue("grade", Number(e.target.value))}
        />
        <ClassSelect
          value={String(classNoValue || "")}
          onChange={(e) => setValue("classNo", Number(e.target.value))}
        />
        <S.SmallInput
          placeholder='번호'
          type='number'
          {...register("studentNo", {
            required: "학번을 입력하세요.",
            min: {
              value: 1,
              message: "올바른 학번을 입력하세요.",
            },
          })}
        />
      </S.SmallInputBox>
      <S.RegisterButton type='submit'>회원가입</S.RegisterButton>
    </S.InputContainer>
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Sh4reLogo>
          <img src='/sh4reLogo.svg' alt='sh4re logo' />
        </S.Sh4reLogo>
        <S.RegisterContainer>
          <S.RegisterBox
            as='form'
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
          >
            {step === 1 ? renderStep1() : renderStep2()}

            <S.AuthBottomContainer>
              <S.AccountSupport>
                계정이 있으신가요?
                <span>
                  <Link to='/login'>로그인</Link>
                </span>
              </S.AccountSupport>
            </S.AuthBottomContainer>
          </S.RegisterBox>

          {step === 2 && (
            <button type='button' onClick={previousStep}>
              이전
            </button>
          )}
        </S.RegisterContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
