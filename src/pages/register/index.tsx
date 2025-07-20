import * as S from "./style.ts";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useRegister from "../../hooks/auth/useRegister.ts";
import type { RegisterFormInputs } from "../../types/auth/register.ts";
import GradeSelect from "../../components/common/auth/registerSelect/gradeSelect/index.tsx";
import ClassSelect from "../../components/common/auth/registerSelect/classSelect/index.tsx";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  // STEP1, 2 데이터를 별도로 저장
  const [step1Data, setStep1Data] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [step2Data, setStep2Data] = useState({
    name: "",
    schoolCode: "",
    grade: null as number | null,
    classNo: null as number | null,
    studentNo: null as number | null, // 현재는 null, number or null 값으로 변경 가능
  });

  const { register, handleSubmit, watch, setValue } =
    useForm<RegisterFormInputs>({
      defaultValues: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        schoolCode: "",
        name: "",
        classNo: null,
        studentNo: null,
        grade: null,
      },
    });

  const { submit } = useRegister();

  const gradeValue = watch("grade");
  const classNoValue = watch("classNo");

  const nextStep = () => {
    setStep1Data({
      username: watch("username"),
      email: watch("email"),
      password: watch("password"),
      passwordConfirm: watch("passwordConfirm"),
    });

    // step2로 이동하면서 저장된 step2 데이터 복원
    setValue("name", step2Data.name);
    setValue("schoolCode", step2Data.schoolCode);
    setValue("grade", step2Data.grade);
    setValue("classNo", step2Data.classNo);
    setValue("studentNo", step2Data.studentNo);

    setStep(2);
  };

  const previousStep = () => {
    // step2 데이터 저장
    setStep2Data({
      name: watch("name"),
      schoolCode: watch("schoolCode"),
      grade: watch("grade"),
      classNo: watch("classNo"),
      studentNo: watch("studentNo"),
    });

    // step1으로 돌아가면서 저장된 데이터 복원
    setValue("username", step1Data.username);
    setValue("email", step1Data.email);
    setValue("password", step1Data.password);
    setValue("passwordConfirm", step1Data.passwordConfirm);

    setStep(1);
  };

  const onSubmit = async (data: RegisterFormInputs) => {
    await submit(data);
  };

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    if (step === 1) {
      // step1 필드들을 저장된 데이터로 설정
      setValue("username", step1Data.username);
      setValue("email", step1Data.email);
      setValue("password", step1Data.password);
      setValue("passwordConfirm", step1Data.passwordConfirm);
    } else if (step === 2) {
      // step2 필드들을 저장된 데이터로 설정
      setValue("name", step2Data.name);
      setValue("schoolCode", step2Data.schoolCode);
      setValue("grade", step2Data.grade);
      setValue("classNo", step2Data.classNo);
      setValue("studentNo", step2Data.studentNo);
    }
  }, [step, setValue, step1Data, step2Data]);

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
      <S.RegisterButton type='submit' onClick={nextStep}>
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
          onWheel={(e) => (e.target as HTMLInputElement).blur()}
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
      <S.PreviousButton onClick={previousStep}>이전으로</S.PreviousButton>
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
        </S.RegisterContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
