import * as S from "./style";
import AssignmentSection from "../../components/common/home/assignment/list";

const Home = () => {
    return (
        <S.Container>
            <S.ContentWrap>
                <AssignmentSection icon="/task.svg" title="과제" link={""} />
                <AssignmentSection icon="/task.svg" title="과제" link={""} />
                <AssignmentSection icon="/task.svg" title="과제" link={""} />
            </S.ContentWrap>
        </S.Container>
    );
};

export default Home;
