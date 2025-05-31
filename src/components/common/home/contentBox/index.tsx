import { useNavigate } from "react-router-dom";
import type { ContentBoxProps } from "../../../../types/home/ContentBoxProps";
import * as S from "./style";

const ContentBox = ({ status, title, period, link }: ContentBoxProps) => {
    const navigate = useNavigate();
    return (
        <S.Container onClick={() => navigate(link)}>
            <S.TitleWrap>
                <S.Status>[{status}]</S.Status>
                {title}
                <S.Period>~ {period}</S.Period>
            </S.TitleWrap>
        </S.Container>
    );
};

export default ContentBox;
