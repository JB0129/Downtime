import React from "react";
import { Words, Word, LetterInput } from "./../Wordle.style";

interface OwnProps {
  isWord: string[];
  effect: string;
}

const WordInput: React.FC<OwnProps> = ({ isWord, effect }) => {
  return (
    <Words>
      <Word>
        <LetterInput className={effect}>
          <div>{isWord[0]}</div>
        </LetterInput>
        <LetterInput className={effect}>
          <div>{isWord[1]}</div>
        </LetterInput>
        <LetterInput className={effect}>
          <div>{isWord[2]}</div>
        </LetterInput>
        <LetterInput className={effect}>
          <div>{isWord[3]}</div>
        </LetterInput>
        <LetterInput className={effect}>
          <div>{isWord[4]}</div>
        </LetterInput>
      </Word>
    </Words>
  );
};

export default WordInput;
