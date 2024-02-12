import React, { useEffect, useState } from "react";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";
import { MainContainer } from "../../assets/layouts/layout.style";
import Answer from "./component/Answer";
import { WordleContainer } from "./Wordle.style";
import { GameTitle } from "../../assets/typography/typography.style";
import { useGetWord, usePostWord } from "../../hooks/wordleHook";

export const solve = "HAPPY";

const Wordle: React.FC = () => {
  const [isAnswer, setAnswer] = useState<Array<string>[]>([]); // 입력된 오답 Line
  const [isWord, setWord] = useState<string[]>([]); // 현재 입력중인 Line
  const [complete, setComplete] = useState<boolean>(false); // 정답 유무
  const [effect, setEffect] = useState<string>("");

  const { data: todayWord } = useGetWord();
  const { mutate: checkWord } = usePostWord(isWord.join(""));

  console.log(todayWord);

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
      // alert("빈칸을 채워주세요.");
      setEffect("wrong");
      setTimeout(() => {
        setEffect("");
      }, 200);
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
        // setComplete(true);
        // setAnswer((isAnswer) => [...isAnswer, isWord]);
        // setEffect("success");
        // alert("정답입니다!");
        checkWord();
        return;
      }
    }
  };

  useEffect(() => {
    window.onkeydown = (e) => insertWord(e.key);
  }, [isWord]);

  useEffect(() => {
    if (isAnswer.length >= 6) {
      setComplete(true);
    }
  }, [isAnswer]);

  return (
    <MainContainer>
      <GameTitle>
        <span>Wordle</span>
      </GameTitle>
      <WordleContainer>
        {isAnswer.map((word, idx) => (
          <Answer key={idx} word={word} complete={complete} />
        ))}
        {!complete && <WordInput isWord={isWord} effect={effect} />}
      </WordleContainer>
      <Keyboard insertWord={insertWord} isAnswer={isAnswer} />
    </MainContainer>
  );
};

export default Wordle;
