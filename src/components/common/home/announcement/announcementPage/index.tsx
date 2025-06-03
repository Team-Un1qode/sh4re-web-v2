import DetailBar from "../../detailbar/index.tsx";
import * as S from "./style.ts";
import AnnouncementItem from "../item/index.tsx";

export interface AnnouncementBarProps {
  title: string;
  icon: string;
  link: string;
}

const AnnouncementPage = ({ title, icon, link }: AnnouncementBarProps) => {
  return (
    <S.Container>
      <DetailBar title={title} icon={icon} link={link} />
      <S.AssignmentList>
        <AnnouncementItem
          status='공지'
          title='6월 3일까지 과학 원소 수행평가 제출하세요~'
          period='2025.06.01'
          link=''
          name='김은찬'
        />
        <AnnouncementItem
          status='공지'
          title='1학년 1반 한승환 학생 디자인 열심히 해주세요'
          period='2025.05.20'
          link=''
          name='채근영'
        />
        <AnnouncementItem
          status='과제'
          title='[파일입출력] 체크리스트 만들기 2'
          period='2025.05.19'
          link=''
          name='김성한'
        />
      </S.AssignmentList>
    </S.Container>
  );
};

export default AnnouncementPage;
