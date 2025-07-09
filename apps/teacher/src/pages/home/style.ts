import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme }) => theme.color.mainText};
  min-height: 100vh;
  padding: 40px;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TeacherTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainText};
  margin-bottom: 10px;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.selectText};
  margin-bottom: 20px;
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const DashboardCard = styled.div`
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.mainText};
  margin-bottom: 12px;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.selectText};
  line-height: 1.5;
`;
