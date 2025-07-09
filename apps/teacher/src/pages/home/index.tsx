import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.TeacherTitle>선생님 대시보드</S.TeacherTitle>
        <S.WelcomeMessage>
          안녕하세요, 선생님! 학생들의 학습을 관리하고 지원하세요.
        </S.WelcomeMessage>
        
        <S.ContentWrap>
          <S.DashboardCard>
            <S.CardTitle>학생 현황</S.CardTitle>
            <S.CardContent>전체 학생 수: 25명</S.CardContent>
          </S.DashboardCard>
          
          <S.DashboardCard>
            <S.CardTitle>미채점 과제</S.CardTitle>
            <S.CardContent>확인 필요: 12개</S.CardContent>
          </S.DashboardCard>
          
          <S.DashboardCard>
            <S.CardTitle>최근 제출</S.CardTitle>
            <S.CardContent>새로운 제출물: 5개</S.CardContent>
          </S.DashboardCard>
        </S.ContentWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Home;
