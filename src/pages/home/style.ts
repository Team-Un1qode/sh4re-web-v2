import styled from "styled-components";
import { COLOR } from "../../style/color/color";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.background};
    padding: 2rem 4rem;
    overflow: hidden;
     box-sizing: border-box;
`;

export const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
`;
