import React, { useEffect, useRef, useState } from "react";
import { Words, Word, Letter, LetterBox } from "./../Wordle.style";

interface OwnProps {
  solve: string;
  handleMoreChance: () => void;
}

const WordInput: React.FC<OwnProps> = ({ solve, handleMoreChance }) => {
  // useEffect(() => {
  //   if (complete) {
  //     const answer = Object.values(isWord).join("");
  //     if (solve !== answer) {
  //       handleMoreChance();
  //     } else {
  //       alert("정답입니다!");
  //     }
  //   }
  // }, [complete]);

  const [isWord, setWord] = useState<string[]>([]);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (/[a-zA-Z]/.test(e.key) && e.key.length === 1 && isWord.length < 5) {
        console.log(e.key);
        setWord((isWord) => [...isWord, e.key.toUpperCase()]);
      }
      if (e.key === "Backspace" && isWord.length > 0) {
        setWord((isWord) => isWord.slice(0, isWord.length - 1));
      }
    };
  }, [isWord]);

  return (
    <div>
      <Words>
        <Word>
          <LetterBox>
            <div>{isWord[0]}</div>
          </LetterBox>
          <LetterBox>
            <div>{isWord[1]}</div>
          </LetterBox>
          <LetterBox>
            <div>{isWord[2]}</div>
          </LetterBox>
          <LetterBox>
            <div>{isWord[3]}</div>
          </LetterBox>
          <LetterBox>
            <div>{isWord[4]}</div>
          </LetterBox>
        </Word>
      </Words>
    </div>
  );
};

export default WordInput;
