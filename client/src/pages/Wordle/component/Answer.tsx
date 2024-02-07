import React from "react";
import { Words, Word, Letter } from "./../Wordle.style";
import { solve } from "./../Wordle";

interface OwnProps {
  word: string[];
  complete: boolean;
}

const Answer: React.FC<OwnProps> = ({ word, complete }) => {
  // ambiguous 판단 로직
  const ambiguous = (idx: number): boolean => {
    let count = 0;
    for (let i = 0; i < solve.length; i++) {
      if (i !== idx && word[idx] === solve[i] && solve[i] !== word[i]) {
        count += 1;
      }
    }
    return count > 0;
  };

  // correct, ambiguous, incorrect 판단하기
  const handleCompare = (idx: number) =>
    word[idx] === solve[idx]
      ? "correct"
      : ambiguous(idx)
        ? "ambiguous"
        : "incorrect";

  // 정답일때 animation 작동
  const success = complete && word.join("") === solve ? "correct" : "incorrect";

  return (
    <Words>
      <Word>
        {word.map((el, idx) => (
          <Letter key={idx} correct={handleCompare(idx)} className={success}>
            <div>{el}</div>
          </Letter>
        ))}
      </Word>
    </Words>
  );
};

export default Answer;
