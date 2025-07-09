import DetailBar from "../../detailbar/index.tsx";
import Container from "../../container/index.tsx";
import * as S from "./style.ts";
import HandOutsItem from "../item/index.tsx";
import type { SectionProps } from "../../../../../types/home/SectionPorps.ts";

export const handouts = [
  {
    status: "pptx" as const,
    title: "5월 5일 수업.pptx",
    period: "2025.06.01",
    link: "",
    name: "채근영",
  },
  {
    status: "hwp" as const,
    title: "파이썬 잘 하는 법.hwp",
    period: "2025.05.20",
    link: "",
    name: "권대형",
  },
  {
    status: "pdf" as const,
    title: "파이썬 5월 수업 자료 정리.pdf",
    period: "2025.05.19",
    link: "",
    name: "김은찬",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
  {
    status: "pptx" as const,
    title: "5월 5일 수업.pptx",
    period: "2025.06.01",
    link: "",
    name: "채근영",
  },
  {
    status: "hwp" as const,
    title: "파이썬 잘 하는 법.hwp",
    period: "2025.05.20",
    link: "",
    name: "권대형",
  },
  {
    status: "pdf" as const,
    title: "파이썬 5월 수업 자료 정리.pdf",
    period: "2025.05.19",
    link: "",
    name: "김은찬",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
  {
    status: "etc" as const,
    title: "파이썬 5월 수업 자료 정리.als",
    period: "2025.05.19",
    link: "",
    name: "김성한",
  },
  {
    status: "txt" as const,
    title: "디자인을 잘 하고 싶나요?.txt",
    period: "2025.05.19",
    link: "",
    name: "오용준",
  },
  {
    status: "hwp" as const,
    title: "컴일 석차 1등이 되는 법.hwp",
    period: "2025.05.19",
    link: "",
    name: "한승환",
  },
];

const HandOutsSection = ({
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
      <S.HandOutsList $variant={variant}>
        {handouts.map((item, index) => (
          <HandOutsItem
            key={index}
            status={item.status}
            title={item.title}
            period={item.period}
            link={item.link}
            name={item.name}
          />
        ))}
      </S.HandOutsList>
    </S.Container>
  );
};

export default HandOutsSection;
