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
      ? theme.style.letter_bgColor_basic
      : correct === "correct"
        ? theme.style.letter_bgColor_correct
        : correct === "ambiguous"
          ? theme.style.letter_bgColor_ambiguous
          : theme.style.letter_bgColor_incorrect};
  width: 100%;
  max-width: 55px;
  height: 50px;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.style.keyboard_border};
  border-radius: 8px;
  font-size: 16px; // 미디어 쿼리로 조절
  font-weight: 600;
  color: ${({ theme }) => theme.style.textColor};

  &:hover {
    background-color: ${({ theme, correct }) =>
      correct ? "none" : theme.style.keyboard_bgColor_hover};
  }

  &:active {
    background-color: ${({ theme, correct }) =>
      correct ? "none" : theme.style.keyboard_bgColor_active};
  }
`;
