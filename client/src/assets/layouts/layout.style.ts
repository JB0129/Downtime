import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.style.backgroundColor};
  color: ${({ theme }) => theme.style.color};
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
  margin-top: 40px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.style.main_border};
  border-radius: 24px;
`;
