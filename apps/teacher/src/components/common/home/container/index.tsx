import type { SectionProps } from "../../../../types/home/SectionPorps";
import * as S from "./style";

const Container = ({ title }: SectionProps) => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.TitleWrap>{title}</S.TitleWrap>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Container;
