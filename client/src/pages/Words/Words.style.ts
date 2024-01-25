import styled from "styled-components";

export const PageContainer = styled.div``;

export const Words = styled.ul`
  /* background-color: ${({ theme }) => theme.style.backgroundColor}; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Word = styled.li`
  /* background-color: ${({ theme }) => theme.style.backgroundColor}; */
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Letter = styled.input`
  /* background-color: ${({ theme }) => theme.style.backgroundColor}; */
  width: 100px;
  height: 100px;
`;
