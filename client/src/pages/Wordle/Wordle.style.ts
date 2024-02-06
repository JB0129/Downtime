import styled from "styled-components";

export const WordleContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Words = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Word = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
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
  border: 2px solid rgb(200, 200, 200);
  width: 100%;
  max-width: 70px;
  aspect-ratio: 1/1;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;

  /* // Start the shake animation and make the animation last for 0.5 seconds
  animation: shake 0.2s;
  // When the animation is finished, start again
  animation-iteration-count: 2;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  } */
`;
