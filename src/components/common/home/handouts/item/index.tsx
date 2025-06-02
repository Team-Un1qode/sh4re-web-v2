import { useNavigate } from "react-router-dom";
import * as S from "./style.ts";

export interface HandOutsProps {
  period: string;
  title: string;
  status: "pptx" | "hwp" | "pdf" | "py" | "etc";
  link: string;
  name: string;
}

const getFileIcon = (status: string) =>
  status === "pptx"
    ? "/src/assets/icons/pptx.svg"
    : status === "hwp"
    ? "/src/assets/icons/hwp.svg"
    : status === "pdf"
    ? "/src/assets/icons/pdf.svg"
    : status === "py"
    ? "/src/assets/icons/py.svg"
    : "/src/assets/icons/etc.svg";

const HandOutsItem = ({ status, title, period, link, name }: HandOutsProps) => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(link)}>
      <S.TitleWrap>
        <S.Status>
          <img src={getFileIcon(status)} alt='file icon' />
        </S.Status>
        {title}
      </S.TitleWrap>
      <S.Period>
        {period} · {name}
      </S.Period>
    </S.Container>
  );
};

export default HandOutsItem;
