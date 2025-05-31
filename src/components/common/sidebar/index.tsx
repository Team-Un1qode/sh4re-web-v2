import * as S from "./style";
import { sidebarItems } from "../../../constants/sidebar";

const Sidebar = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Logo src="/sh4reLogo.svg" />
                <S.List>
                    {sidebarItems.map(({ icon, text }) => (
                        <S.Elem key={text}>
                            <S.Icon src={icon} />
                            <S.ElemText>{text}</S.ElemText>
                        </S.Elem>
                    ))}
                </S.List>
            </S.Content>
            <S.Profile>
                <S.ProfileIcon src="/profile.svg" />
                {"채근영"}
            </S.Profile>
        </S.Container>
    );
};

export default Sidebar;
