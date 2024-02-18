import React from "react";
import { ModalBackground } from "../../../assets/modal/Modal.style";
import {
  ManualContainer,
  ManualContent,
  ManualHeader,
  ManualTitle,
} from "./WordleManual.style";
import { Letter, Word } from "../Wordle.style";

interface OwnProps {
  handleMenu: () => void;
}

const WordleManual: React.FC<OwnProps> = ({ handleMenu }) => {
  const ambiguous = (word: string, idx: number): boolean => {
    let count = 0;
    for (let i = 0; i < "WHITE".length; i++) {
      if (i !== idx && word[idx] === "WHITE"[i] && "WHITE"[i] !== word[i]) {
        count += 1;
      }
    }
    return count > 0;
  };

  const handleCompare = (word: string, idx: number) =>
    word[idx] === "WHITE"[idx]
      ? "correct"
      : ambiguous(word, idx)
        ? "ambiguous"
        : "incorrect";

  return (
    <ModalBackground onClick={handleMenu}>
      <ManualContainer onClick={(e) => e.stopPropagation()}>
        <ManualHeader>
          <button onClick={handleMenu}>&times;</button>
        </ManualHeader>
        <ul>
          <ManualTitle>How to play ?</ManualTitle>
          <ManualContent>
            타일의 색을 통해 오늘의 단어를 맞추는 게임입니다.
          </ManualContent>
          <ManualContent>
            기회는 총 6회 입니다. 6번 안에 정답을 맞춰야합니다.
          </ManualContent>
          <ManualContent>유효한 단어만 입력 가능합니다.</ManualContent>
          <Word>
            {["B", "L", "A", "C", "K"].map((el, idx) => (
              <Letter key={idx} correct={handleCompare("BLACK", idx)}>
                <div>{el}</div>
              </Letter>
            ))}
          </Word>
          <ManualContent>
            단어 안에 해당 알파벳이 없을 경우,
            <span className="incorrect"> 회색</span>으로 나타납니다.
          </ManualContent>
          <Word>
            {["S", "W", "E", "A", "T"].map((el, idx) => (
              <Letter key={idx} correct={handleCompare("SWEAT", idx)}>
                <div>{el}</div>
              </Letter>
            ))}
          </Word>
          <ManualContent>
            단어 안에 해당 알파벳은 있으나, 위치가 다를 경우
            <span className="ambiguous"> 노란색</span>으로 나타납니다.
          </ManualContent>
          <Word>
            {["W", "H", "I", "T", "E"].map((el, idx) => (
              <Letter key={idx} correct={handleCompare("WHITE", idx)}>
                <div>{el}</div>
              </Letter>
            ))}
          </Word>
          <ManualContent>
            단어 안에 해당 알파벳이 있으며, 위치도 맞으면
            <span className="correct"> 빨간색</span>으로 나타납니다.
          </ManualContent>
        </ul>
      </ManualContainer>
    </ModalBackground>
  );
};

export default WordleManual;
