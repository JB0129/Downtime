import styled from "styled-components";

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

export const Letter = styled.div`
  background-color: ${({ theme }) => theme.style.wordle_letter_background};
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  border: 1px solid black;
`;
