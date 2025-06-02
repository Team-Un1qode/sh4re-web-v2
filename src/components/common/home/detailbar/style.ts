import styled from "styled-components";
import { COLOR } from "../../../../style/color/color";

export const Container = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 2rem;
`;

export const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TitleWrap = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: ${COLOR.black};
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Icon = styled.img`
    height: 100%;
`;

export const DetailWrap = styled(TitleWrap)`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${COLOR.dark};
    gap: 1rem;
    cursor: pointer;
`;

export const DetailIcon = styled.img`
    height: 1.75rem;
`;
