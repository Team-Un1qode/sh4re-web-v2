import DetailBar from "../../detailbar/index.tsx";
import * as S from "./style.ts";
import HandOutsItem from "../item/index.tsx";
import type { SectionProps } from "../../../../../types/home/SectionPorps.ts";

const HandOutsSection = ({ title, icon, link }: SectionProps) => {
  return (
    <S.Container>
      <DetailBar title={title} icon={icon} link={link} />
      <S.HandOutsList>
        <HandOutsItem
          status='pptx'
          title='5월 5일 수업.pptx'
          period='2025.06.01'
          link=''
          name='채근영'
        />
        <HandOutsItem
          status='hwp'
          title='파이썬 잘 하는 법.hwp'
          period='2025.05.20'
          link=''
          name='권대형'
        />
        <HandOutsItem
          status='pdf'
          title='파이썬 5월 수업 자료 정리.pdf'
          period='2025.05.19'
          link=''
          name='김은찬'
        />
        <HandOutsItem
          status='etc'
          title='파이썬 5월 수업 자료 정리.als'
          period='2025.05.19'
          link=''
          name='김성한'
        />
        <HandOutsItem
          status='etc'
          title='디자인을 잘 하고 싶나요?.txt'
          period='2025.05.19'
          link=''
          name='오용준'
        />
        <HandOutsItem
          status='hwp'
          title='컴일 석차 1등이 되는 법.hwp'
          period='2025.05.19'
          link=''
          name='한승환'
        />
        <HandOutsItem
          status='pptx'
          title='정보 수업 첫 강의.pptx'
          period='2025.05.18'
          link=''
          name='김은찬'
        />
        <HandOutsItem
          status='pdf'
          title='알고리즘 개념 총정리.pdf'
          period='2025.05.17'
          link=''
          name='오용준'
        />
        <HandOutsItem
          status='py'
          title='list_comprehension.py'
          period='2025.05.16'
          link=''
          name='채근영'
        />
        <HandOutsItem
          status='pptx'
          title='정보 수업 첫 강의.pptx'
          period='2025.05.18'
          link=''
          name='김은찬'
        />
        <HandOutsItem
          status='pdf'
          title='알고리즘 개념 총정리.pdf'
          period='2025.05.17'
          link=''
          name='오용준'
        />
        <HandOutsItem
          status='py'
          title='list_comprehension.py'
          period='2025.05.16'
          link=''
          name='채근영'
        />
        <HandOutsItem
          status='pptx'
          title='정보 수업 첫 강의.pptx'
          period='2025.05.18'
          link=''
          name='김은찬'
        />
        <HandOutsItem
          status='pdf'
          title='알고리즘 개념 총정리.pdf'
          period='2025.05.17'
          link=''
          name='오용준'
        />
        <HandOutsItem
          status='py'
          title='list_comprehension.py'
          period='2025.05.16'
          link=''
          name='채근영'
        />
      </S.HandOutsList>
    </S.Container>
  );
};

export default HandOutsSection;
