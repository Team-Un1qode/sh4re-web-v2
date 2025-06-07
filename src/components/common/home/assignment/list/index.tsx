import type { SectionProps } from "../../../../../types/home/SectionPorps.ts";
import DetailBar from "../../detailbar";
import * as S from "./style.ts";
import AssignmentItem from "../item";

const AssignmentSection = ({ title, icon, link }: SectionProps) => {
  return (
    <S.Container>
      <DetailBar title={title} icon={icon} link={link} />
      <S.AssignmentList>
        <AssignmentItem
          status='제출됨'
          title='[프로그래밍] 조건문 실습'
          period='2025.05.13'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[자료구조] 배열과 리스트 비교'
          period='2025.05.14'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[알고리즘] 탐색 알고리즘 구현'
          period='2025.05.15'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[네트워크] OSI 7계층 정리'
          period='2025.05.16'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[파이썬] 함수 연습문제'
          period='2025.05.17'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[정보보호] 암호화 기초'
          period='2025.05.18'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[웹개발] HTML 기본 태그 실습'
          period='2025.05.19'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[컴퓨터구조] 논리 회로 과제'
          period='2025.05.20'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[데이터베이스] SQL 실습'
          period='2025.05.21'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[운영체제] 프로세스 스케줄링'
          period='2025.05.22'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[자료구조] 트리와 그래프'
          period='2025.05.24'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[프로그래밍] 반복문 응용'
          period='2025.05.23'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[파이썬] 파일 입출력 미니프로젝트'
          period='2025.05.25'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[알고리즘] 정렬 문제 풀이'
          period='2025.05.26'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[프로그래밍] 조건문 실습'
          period='2025.05.13'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[자료구조] 배열과 리스트 비교'
          period='2025.05.14'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[알고리즘] 탐색 알고리즘 구현'
          period='2025.05.15'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[네트워크] OSI 7계층 정리'
          period='2025.05.16'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[파이썬] 함수 연습문제'
          period='2025.05.17'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[정보보호] 암호화 기초'
          period='2025.05.18'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[웹개발] HTML 기본 태그 실습'
          period='2025.05.19'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[컴퓨터구조] 논리 회로 과제'
          period='2025.05.20'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[데이터베이스] SQL 실습'
          period='2025.05.21'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[운영체제] 프로세스 스케줄링'
          period='2025.05.22'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[자료구조] 트리와 그래프'
          period='2025.05.24'
          link=''
        />
        <AssignmentItem
          status='누락됨'
          title='[프로그래밍] 반복문 응용'
          period='2025.05.23'
          link=''
        />
        <AssignmentItem
          status='제출됨'
          title='[파이썬] 파일 입출력 미니프로젝트'
          period='2025.05.25'
          link=''
        />
        <AssignmentItem
          status='할당됨'
          title='[알고리즘] 정렬 문제 풀이'
          period='2025.05.26'
          link=''
        />
      </S.AssignmentList>
    </S.Container>
  );
};

export default AssignmentSection;
