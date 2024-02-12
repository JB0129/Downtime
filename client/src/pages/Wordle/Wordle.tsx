import React, { useEffect, useState } from "react";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";
import { MainContainer } from "../../assets/layouts/layout.style";
import Answer from "./component/Answer";
import { Msg, WordleContainer } from "./Wordle.style";
import { GameTitle } from "../../assets/typography/typography.style";
import { useGetWord, usePostWord } from "../../hooks/wordleHook";

const Wordle: React.FC = () => {
  const [isAnswer, setAnswer] = useState<Array<string>[]>([]); // 입력된 오답 Line
  const [isWord, setWord] = useState<string[]>([]); // 현재 입력중인 Line
  const [complete, setComplete] = useState<boolean>(false); // 정답 유무
  const [effect, setEffect] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const { data: todayWord } = useGetWord();
  const { mutate: checkWord } = usePostWord(isWord.join(""), (res) => {
    if (!/[a-zA-Z]/.test(res)) {
      setAnswer((isAnswer) => [...isAnswer, isWord]);
      setWord([]);
      return;
    } else {
      setMsg("옳바른 단어를 입력해주세요.");
      setEffect("wrong");
      setTimeout(() => {
        setEffect("");
      }, 200);
      return;
    }
  });

  const insertWord = (key: string) => {
    if (isAnswer.length >= 6) return setMsg("Game Over");
    if (/[a-zA-Z]/.test(key) && key.length === 1 && isWord.length < 5) {
      setMsg("");
      return setWord((isWord) => [...isWord, key.toUpperCase()]);
    }
    if ((key === "Backspace" || key === "←") && isWord.length > 0) {
      setMsg("");
      return setWord((isWord) => isWord.slice(0, isWord.length - 1));
    }
    if (key === "Enter" && isWord.length < 5 && !complete) {
      setMsg("빈칸을 채워주세요.");
      setEffect("wrong");
      setTimeout(() => {
        setEffect("");
      }, 200);
      return;
    }
    if (key === "Enter" && isWord.length === 5) {
      if (complete) {
        setMsg("이미 정답을 맞췄습니다.");
        return;
      }
      const answer = isWord.join("");
      if (todayWord !== answer) {
        return checkWord();
      } else {
        setComplete(true);
        setAnswer((isAnswer) => [...isAnswer, isWord]);
        setEffect("success");
        setMsg("정답입니다!");
        return;
      }
    }
  };

  useEffect(() => {
    window.onkeydown = (e) => insertWord(e.key);
  }, [isWord, complete]);

  useEffect(() => {
    if (isAnswer.length >= 6) {
      setComplete(true);
      setMsg("Game Over");
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
      <Msg>{msg}</Msg>
      <Keyboard insertWord={insertWord} isAnswer={isAnswer} />
    </MainContainer>
  );
};

export default Wordle;
