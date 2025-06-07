import { useNavigate } from "react-router-dom";
import type { SectionProps } from "../../../../types/home/SectionPorps";
import * as S from "./style";

const DetailBar = ({ title, icon, link }: SectionProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.ContentWrap>
        <S.TitleWrap>
          <S.Icon>{icon}</S.Icon>
          {title}
        </S.TitleWrap>
        <S.DetailWrap onClick={() => navigate(link)}>
          자세히보기
          <S.DetailIcon src='/arrow_reversed.svg' />
        </S.DetailWrap>
      </S.ContentWrap>
    </S.Container>
  );
};

export default DetailBar;
