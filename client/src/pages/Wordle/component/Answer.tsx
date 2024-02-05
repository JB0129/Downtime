import React from "react";
import { Words, Word, Letter } from "./../Wordle.style";
import { solve } from "./../Wordle";

interface OwnProps {
  word: string[];
}

const Answer: React.FC<OwnProps> = ({ word }) => {
  const ambiguous = (idx: number): any => {
    let count = 0;
    for (let i = 0; i < solve.length; i++) {
      if (i !== idx && word[idx] === solve[i] && solve[i] !== word[i]) {
        count += 1;
      }
    }
    return count > 0;
  };

  const handleCompare = (idx: number) =>
    word[idx] === solve[idx]
      ? "correct"
      : ambiguous(idx)
        ? "ambiguous"
        : "incorrect";

  return (
    <Words>
      <Word>
        {word.map((el, idx) => (
          <Letter key={idx} correct={handleCompare(idx)}>
            <div>{el}</div>
          </Letter>
        ))}
      </Word>
    </Words>
  );
};

export default Answer;
