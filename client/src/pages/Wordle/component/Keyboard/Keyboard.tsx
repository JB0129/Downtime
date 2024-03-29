import React from "react";
import { KeyLine, KeyboardContainer, KeyBtn, Keys } from "./Keyboard.style";
import { useGetWord } from "../../../../hooks/wordleHook";

interface OwnProps {
  insertWord: (key: any) => void;
  isAnswer: Array<string>[];
  complete: boolean;
}

const Keyboard: React.FC<OwnProps> = ({ insertWord, isAnswer, complete }) => {
  const { data: todayWord } = useGetWord();

  const topKey = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleKey = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomKey = ["←", "Z", "X", "C", "V", "B", "N", "M", "Enter"];

  const handleInsertWord = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!complete) {
      insertWord(e.currentTarget.textContent);
    }
    e.currentTarget.blur();
  };

  const handleCompare = (el: string) => {
    if (!isAnswer.join().includes(el)) return undefined;
    if (!todayWord.includes(el)) return "incorrect";
    let count = 0;
    for (let i = 0; i < isAnswer.length; i++) {
      for (let j = 0; j < todayWord.length; j++) {
        if (isAnswer[i][j] === todayWord[j] && todayWord[j] === el) count += 1;
      }
    }
    if (count > 0) return "correct";
    return "ambiguous";
  };

  return (
    <KeyboardContainer>
      <KeyLine>
        {topKey.map((el, idx) => (
          <Keys key={idx}>
            <KeyBtn onClick={handleInsertWord} correct={handleCompare(el)}>
              {el}
            </KeyBtn>
          </Keys>
        ))}
      </KeyLine>
      <KeyLine>
        {middleKey.map((el, idx) => (
          <Keys key={idx}>
            <KeyBtn onClick={handleInsertWord} correct={handleCompare(el)}>
              {el}
            </KeyBtn>
          </Keys>
        ))}
      </KeyLine>
      <KeyLine>
        {bottomKey.map((el, idx) => (
          <Keys
            key={idx}
            className={el === "←" || el === "Enter" ? "other" : ""}
          >
            <KeyBtn onClick={handleInsertWord} correct={handleCompare(el)}>
              {el}
            </KeyBtn>
          </Keys>
        ))}
      </KeyLine>
    </KeyboardContainer>
  );
};

export default Keyboard;
