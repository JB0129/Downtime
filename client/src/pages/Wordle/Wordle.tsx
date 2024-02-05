import React, { useEffect, useState } from "react";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";
import { MainContainer } from "../../assets/layouts/layout.style";
import Answer from "./component/Answer";

export const solve = "HAPPY";

const Wordle: React.FC = () => {
  const [isAnswer, setAnswer] = useState<Array<string>[]>([]); // 입력된 오답 Line
  const [isWord, setWord] = useState<string[]>([]); // 현재 입력중인 Line
  const [complete, setComplete] = useState<boolean>(false); // 정답 유무

  const insertWord = (key: string) => {
    if (/[a-zA-Z]/.test(key) && key.length === 1 && isWord.length < 5) {
      setWord((isWord) => [...isWord, key.toUpperCase()]);
      return;
    }
    if ((key === "Backspace" || key === "←") && isWord.length > 0) {
      setWord((isWord) => isWord.slice(0, isWord.length - 1));
      return;
    }
    if (key === "Enter" && isWord.length < 5) {
      alert("빈칸을 채워주세요.");
      return;
    }
    if (key === "Enter" && isWord.length === 5) {
      if (complete) {
        alert("이미 정답을 맞췄습니다.");
        return;
      }
      const answer = isWord.join("");
      if (solve !== answer) {
        setAnswer((isAnswer) => [...isAnswer, isWord]);
        setWord([]);
        return;
      } else {
        setComplete(true);
        setAnswer((isAnswer) => [...isAnswer, isWord]);
        alert("정답입니다!");
        return;
      }
    }
  };

  useEffect(() => {
    window.onkeydown = (e) => insertWord(e.key);
  }, [isWord]);

  const papago = () => {
    return axios.post("")
  }

  return (
    <MainContainer>
      <div>
        {isAnswer.map((word, idx) => (
          <Answer key={idx} word={word} />
        ))}
        {!complete && <WordInput isWord={isWord} />}
        <button>단어 검색</button>
      </div>
      <Keyboard insertWord={insertWord} isAnswer={isAnswer} />
    </MainContainer>
  );
};

export default Wordle;
