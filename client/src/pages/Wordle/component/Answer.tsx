import React from "react";
import { Words, Word, Letter } from "./../Wordle.style";

interface OwnProps {
  word: string[];
  isAnswer: Array<string>[];
}

const Answer: React.FC<OwnProps> = ({ word }) => {
  return (
    <Words>
      <Word>
        <Letter>
          <div>{word[0]}</div>
        </Letter>
        <Letter>
          <div>{word[1]}</div>
        </Letter>
        <Letter>
          <div>{word[2]}</div>
        </Letter>
        <Letter>
          <div>{word[3]}</div>
        </Letter>
        <Letter>
          <div>{word[4]}</div>
        </Letter>
      </Word>
    </Words>
  );
};

export default Answer;
