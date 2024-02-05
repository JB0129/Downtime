import React from "react";
import { KeyLine, KeyboardContainer, Keys } from "./Keyboard.style";
import { solve } from "../../Wordle";

interface OwnProps {
  insertWord: (key: any) => void;
  isAnswer: Array<string>[];
}

const Keyboard: React.FC<OwnProps> = ({ insertWord, isAnswer }) => {
  const topKey = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleKey = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomKey = ["←", "Z", "X", "C", "V", "B", "N", "M", "Enter"];

  const handleInsertWord = (e: React.MouseEvent<HTMLButtonElement>) => {
    insertWord(e.currentTarget.textContent);
  };

  const correct = true;

  return (
    <KeyboardContainer>
      <KeyLine>
        {topKey.map((el, idx) => (
          <Keys key={idx} onClick={handleInsertWord} correct={correct}>
            {el}
          </Keys>
        ))}
      </KeyLine>
      <KeyLine>
        {middleKey.map((el, idx) => (
          <Keys key={idx} onClick={handleInsertWord} correct={correct}>
            {el}
          </Keys>
        ))}
      </KeyLine>
      <KeyLine>
        {bottomKey.map((el, idx) => (
          <Keys key={idx} onClick={handleInsertWord} correct={correct}>
            {el}
          </Keys>
        ))}
      </KeyLine>
    </KeyboardContainer>
  );
};

export default Keyboard;
