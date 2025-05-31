import ContentTable from "../../components/common/home/contentTable";
import * as S from "./style";

const Home = () => {
    return (
        <S.Container>
            <S.ContentWrap>
                <ContentTable icon="/task.svg" title="과제" link={""} />
            </S.ContentWrap>
        </S.Container>
    );
};

export default Home;
