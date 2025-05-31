import styled from "styled-components";
import { COLOR } from "../../style/color/color";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.background};
`;

export const ContentWrap = styled.div`
    width: 99%;
    height: 90%;
    padding: 4rem;
`;
