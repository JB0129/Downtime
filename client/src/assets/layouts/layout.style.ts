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
