import type { DetailbarProps } from "../../../../../types/home/DetailbarProps.ts";
import DetailBar from "../../detailbar";
import * as S from "./style.ts";
import AssignmentItem from "../item";

const AssignmentSection = ({ title, icon, link }: DetailbarProps) => {
    return (
        <S.Container>
            <DetailBar title={title} icon={icon} link={link} />
            <S.AssignmentList>
                <AssignmentItem
                    status="누락됨"
                    title="[파일입출력] 체크리스트 만들기"
                    period="2025.05.16"
                    link=""
                />
                <AssignmentItem
                    status="누락됨"
                    title="[파일입출력] 체크리스트 만들기"
                    period="2025.05.16"
                    link=""
                />
            </S.AssignmentList>
        </S.Container>
    );
};

export default AssignmentSection;
