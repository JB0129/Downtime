import styled from "styled-components";

export const KeyboardContainer = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const KeyLine = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Keys = styled.li`
  width: 100%;
  max-width: 50px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.other {
    max-width: 65px;
  }
`;

export const KeyBtn = styled.button<{ correct?: string }>`
  background-color: ${({ theme, correct }) =>
    !correct
      ? theme.style.letter_bgColor_basic
      : correct === "correct"
        ? theme.style.letter_bgColor_correct
        : correct === "ambiguous"
          ? theme.style.letter_bgColor_ambiguous
          : theme.style.letter_bgColor_incorrect};
  border: 2px solid ${({ theme }) => theme.style.keyboard_border};
  border-radius: 8px;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.style.textColor};
  font-weight: 600;
  font-size: 16px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }

  &:hover {
    background-color: ${({ theme, correct }) =>
      correct ? "none" : theme.style.keyboard_bgColor_hover};
  }

  &:active {
    background-color: ${({ theme, correct }) =>
      correct ? "none" : theme.style.keyboard_bgColor_active};
  }
`;
