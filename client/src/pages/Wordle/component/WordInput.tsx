import React from "react";
import { Words, Word, Letter } from "./../Wordle.style";

interface OwnProps {
  isWord: string[];
}

const WordInput: React.FC<OwnProps> = ({ isWord }) => {
  return (
    <Words>
      <Word>
        <Letter>
          <div>{isWord[0]}</div>
        </Letter>
        <Letter>
          <div>{isWord[1]}</div>
        </Letter>
        <Letter>
          <div>{isWord[2]}</div>
        </Letter>
        <Letter>
          <div>{isWord[3]}</div>
        </Letter>
        <Letter>
          <div>{isWord[4]}</div>
        </Letter>
      </Word>
    </Words>
  );
};

export default WordInput;
