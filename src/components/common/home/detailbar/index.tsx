import { useNavigate } from "react-router-dom";
import type { DetailbarProps } from "../../../../types/home/DetailbarProps";
import * as S from "./style";

const DetailBar = ({ title, icon, link }: DetailbarProps) => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.ContentWrap>
                <S.TitleWrap>
                    <S.Icon src={icon} />
                    {title}
                </S.TitleWrap>
                <S.DetailWrap onClick={() => navigate(link)}>
                    자세히보기
                    <S.DetailIcon src="/arrow_reversed.svg" />
                </S.DetailWrap>
            </S.ContentWrap>
        </S.Container>
    );
};

export default DetailBar;
