import { useNavigate } from "react-router-dom";
import * as S from "./style.ts";
import ArrowReversedIcon from "../../../../../assets/icons/arrow_reversed.svg?react";

export interface ContentBoxProps {
  period: string;
  title: string;
  status: "누락됨" | "할당됨" | "제출됨";
  link: string;
}

const AssignmentItem = ({ status, title, period, link }: ContentBoxProps) => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(link)}>
      <S.TitleWrap>
        <S.Status status={status}>[{status}]</S.Status>
        {title}
        <S.Period>~ {period}</S.Period>
      </S.TitleWrap>
      <S.Icon>
        <ArrowReversedIcon />
      </S.Icon>
    </S.Container>
  );
};

export default AssignmentItem;
