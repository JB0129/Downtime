import styled from "styled-components";

export const WordleContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Msg = styled.div`
  color: ${({ theme }) => theme.style.msg_textColor};
  font-size: 14px;
  font-weight: 600;
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
      ? theme.style.letter_bgColor_basic
      : correct === "correct"
        ? theme.style.letter_bgColor_correct
        : correct === "ambiguous"
          ? theme.style.letter_bgColor_ambiguous
          : theme.style.letter_bgColor_incorrect};
  border: 3px solid ${({ theme }) => theme.style.letter_border};
  width: 100%;
  max-width: 70px;
  aspect-ratio: 1/1;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.style.letter_textColor};

  // 단어 입력 시 animation
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // 정답일 때 animation
  &.correct {
    animation: correct 1s;
    -moz-animation: correct 1s; /* Firefox */
    -webkit-animation: correct 1s; /* Safari and Chrome */
    -o-animation: correct 1s; /* Opera */
    animation-iteration-count: 2;
  }

  // 글자 순서대로 animation delay 적용
  &.correct:nth-child(2) {
    animation-delay: 0.1s;
  }
  &.correct:nth-child(3) {
    animation-delay: 0.2s;
  }
  &.correct:nth-child(4) {
    animation-delay: 0.3s;
  }
  &.correct:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes correct {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-moz-keyframes correct {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-webkit-keyframes correct {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-o-keyframes correct {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const LetterInput = styled.div<{ correct?: string }>`
  background-color: ${({ theme }) => theme.style.letter_bgColor_basic};
  border: 2px solid ${({ theme }) => theme.style.input_border};
  width: 100%;
  max-width: 70px;
  aspect-ratio: 1/1;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;

  // 단어 5글자 모두 입력 안됐을때
  &.wrong {
    animation: wrong 0.2s;
    -moz-animation: wrong 0.2s; /* Firefox */
    -webkit-animation: wrong 0.2s; /* Safari and Chrome */
    -o-animation: wrong 0.2s; /* Opera */
    animation-iteration-count: 2;
  }

  @keyframes wrong {
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
  }
  @-moz-keyframes wrong {
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
  }
  @-webkit-keyframes wrong {
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
  }
  @-o-keyframes wrong {
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
  }
`;
