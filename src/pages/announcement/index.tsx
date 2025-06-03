import AnnouncementSection from "../../components/common/home/announcement/list";
import * as S from "./style";

const Announcement = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <AnnouncementSection
          icon='/announcement.svg'
          title='공지사항'
          link={""}
        />
      </S.ContentWrap>
    </S.Container>
  );
};

export default Announcement;
