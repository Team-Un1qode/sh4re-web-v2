import DetailBar from "../../detailbar/index.tsx";
import Container from "../../container/index.tsx";
import * as S from "./style.ts";
import AnnouncementItem from "../item/index.tsx";
import type { SectionProps } from "../../../../../types/home/SectionPorps.ts";

export const announcements = [
  {
    status: "공지" as const,
    title: "6월 3일까지 과학 원소 수행평가 제출하세요~",
    period: "2025.06.01",
    link: "",
    name: "김은찬",
  },
  {
    status: "과제" as const,
    title: "파이썬 프로젝트 제출 마감: 6월 10일",
    period: "2025.06.10",
    link: "",
    name: "권대형",
  },
  {
    status: "공지" as const,
    title: "6월 5일 컴퓨터실 점검 안내",
    period: "2025.06.05",
    link: "",
    name: "오용준",
  },
  {
    status: "과제" as const,
    title: "디자인 과제: 포스터 제작 제출",
    period: "2025.06.08",
    link: "",
    name: "채근영",
  },
  {
    status: "공지" as const,
    title: "기말고사 대비 특강 안내",
    period: "2025.06.03",
    link: "",
    name: "김성한",
  },
  {
    status: "과제" as const,
    title: "과학 원소 발표 자료 제출",
    period: "2025.06.04",
    link: "",
    name: "김은찬",
  },
  {
    status: "공지" as const,
    title: "1학년 1반 한승환 학생 디자인 열심히 해주세요",
    period: "2025.05.20",
    link: "",
    name: "채근영",
  },
  {
    status: "과제" as const,
    title: "파이썬 수업 실습 파일 제출",
    period: "2025.06.12",
    link: "",
    name: "김성한",
  },
  {
    status: "공지" as const,
    title: "6월 7일 동아리 활동 공지",
    period: "2025.06.07",
    link: "",
    name: "오용준",
  },
  {
    status: "과제" as const,
    title: "기말고사 대비 문제집 풀기",
    period: "2025.06.15",
    link: "",
    name: "김은찬",
  },
  {
    status: "공지" as const,
    title: "6월 9일 교내 체육대회 일정 안내",
    period: "2025.06.09",
    link: "",
    name: "권대형",
  },
  {
    status: "과제" as const,
    title: "컴퓨터 알고리즘 과제 제출",
    period: "2025.06.14",
    link: "",
    name: "오용준",
  },
  {
    status: "공지" as const,
    title: "반장 회의 6월 6일 오후 4시",
    period: "2025.06.06",
    link: "",
    name: "김성한",
  },
  {
    status: "과제" as const,
    title: "수학 문제 풀이 제출",
    period: "2025.06.13",
    link: "",
    name: "채근영",
  },
  {
    status: "공지" as const,
    title: "여름방학 특강 신청 안내",
    period: "2025.06.11",
    link: "",
    name: "김은찬",
  },
  {
    status: "과제" as const,
    title: "영어 단어 시험 준비",
    period: "2025.06.16",
    link: "",
    name: "권대형",
  },
  {
    status: "공지" as const,
    title: "정보보안 동아리 모집 안내",
    period: "2025.06.02",
    link: "",
    name: "오용준",
  },
  {
    status: "과제" as const,
    title: "과학 실험 보고서 제출",
    period: "2025.06.17",
    link: "",
    name: "김성한",
  },
];

const AnnouncementSection = ({
  title,
  icon,
  link,
  variant = "home",
}: SectionProps) => {
  return (
    <S.Container $variant={variant}>
      {variant === "home" ? (
        <DetailBar title={title} icon={icon} link={link} />
      ) : (
        <Container title={title} link='' />
      )}
      <S.AssignmentList $variant={variant}>
        {announcements.map((item, index) => (
          <AnnouncementItem
            key={index}
            status={item.status}
            title={item.title}
            period={item.period}
            link={item.link}
            name={item.name}
          />
        ))}
      </S.AssignmentList>
    </S.Container>
  );
};

export default AnnouncementSection;
