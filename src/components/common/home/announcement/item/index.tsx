import { useNavigate } from "react-router-dom";
import type { AnnouncementProps } from "../../../../../types/home/AnnouncementProps.ts";
import * as S from "./style.ts";

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
