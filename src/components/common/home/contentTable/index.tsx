import type { DetailbarProps } from "../../../../types/home/DetailbarProps";
import ContentBox from "../contentBox";
import Detailbar from "../detailbar";
import * as S from "./style";
const ContentTable = ({ title, icon, link }: DetailbarProps) => {
    return (
        <S.Container>
            <Detailbar title={title} icon={icon} link={link} />
            <ContentBox
                status="누락됨"
                title="[파일입출력] 체크리스트 만들기"
                period="2025.05.16"
                link=""
            />
        </S.Container>
    );
};

export default ContentTable;
