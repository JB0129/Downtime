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

export const Letter = styled.div<{ correct?: string }>`
  background-color: ${({ theme, correct }) =>
    !correct
      ? theme.style.wordle_letter_background
      : correct === "correct"
        ? "rgb(253, 126, 149)"
        : correct === "ambiguous"
          ? "rgb(253, 244, 126)"
          : "rgb(143, 143, 143)"};
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  border: 1px solid black;
`;

/*

const solve =  [H, A, P, P, Y];

const word = [A, H, P, Y, P];

solve 중에서 word와 같은자리에 있는 같은 알파벳 x하기
남은 알파벳 중에 같은 알파벳이 있는지 체크



*/
