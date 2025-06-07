import * as S from "./style";
import AssignmentSection from "../../components/common/home/assignment/section";
import AnnouncementSection from "../../components/common/home/announcement/section";
import HandOutsSection from "../../components/common/home/handouts/section";
import ClassIcon from "../../assets/icons/class.svg?react";
import TaskIcon from "../../assets/icons/task.svg?react";
import AnnouncementIcon from "../../assets/icons/announcement.svg?react";

const Home = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.ContentWrap>
          <AssignmentSection icon={<TaskIcon />} title="과제" link="" />
          <AnnouncementSection
            icon={<AnnouncementIcon />}
            title="공지사항"
            link=""
          />
          <HandOutsSection icon={<ClassIcon />} title="수업 자료" link="" />
        </S.ContentWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Home;
