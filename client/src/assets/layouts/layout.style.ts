import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.style.bgColor};
  color: ${({ theme }) => theme.style.textColor};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  min-height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const GameContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.style.main_border};
  border-radius: 24px;
  width: 100%;
  max-width: 1170px;
  margin: 40px 0px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
