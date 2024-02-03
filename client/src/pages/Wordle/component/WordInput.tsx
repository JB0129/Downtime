import React, { useEffect, useState } from "react";
import { Words, Word, Letter } from "./../Wordle.style";

interface OwnProps {
  isWord: string[];
}

const WordInput: React.FC<OwnProps> = ({ isWord }) => {
  return (
    <div>
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
    </div>
  );
};

export default WordInput;
