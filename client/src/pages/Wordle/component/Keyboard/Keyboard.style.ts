import styled from "styled-components";

export const KeyboardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const KeyLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Keys = styled.button<{ correct?: string }>`
  background-color: ${({ theme, correct }) =>
    !correct
      ? theme.style.wordle_letter_background
      : correct === "correct"
        ? "rgb(253, 126, 149)"
        : correct === "ambiguous"
          ? "rgb(253, 244, 126)"
          : "rgb(143, 143, 143)"};
  width: 100%;
  max-width: 55px;
  height: 50px;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.style.color};
  border-radius: 8px;
  font-size: 16px; // 미디어 쿼리로 조절
  font-weight: 600;
  color: ${({ theme }) => theme.style.color};

  &:hover {
  }
`;

/*
isAnswer = [[A, A, A, A, A], [F, F, F, F, F]]

solve = [H, A, P, P, Y]



*/
