import { useNavigate } from "react-router-dom";
import * as S from "./style.ts";

export interface AnnouncementProps {
  period: string;
  title: string;
  status: "과제" | "공지";
  link: string;
  name: string;
}

const AnnouncementItem = ({
  status,
  title,
  period,
  link,
  name,
}: AnnouncementProps) => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(link)}>
      <S.TitleWrap>
        <S.Status status={status}>[{status}]</S.Status>
        {title}
      </S.TitleWrap>
      <S.Period>
        {period} · {name}
      </S.Period>
    </S.Container>
  );
};

export default AnnouncementItem;
