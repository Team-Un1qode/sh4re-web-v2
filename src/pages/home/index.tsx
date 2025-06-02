import * as S from "./style";
import AssignmentSection from "../../components/common/home/assignment/list";
import AnnouncementSection from "../../components/common/home/announcement/list";
import HandOutsSection from "../../components/common/home/handouts/list";

const Home = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <AssignmentSection icon='/task.svg' title='과제' link={""} />
        <AnnouncementSection
          icon='/announcement.svg'
          title='공지사항'
          link={""}
        />
        <HandOutsSection icon='/task.svg' title='수업 자료' link={""} />
      </S.ContentWrap>
    </S.Container>
  );
};

export default Home;
