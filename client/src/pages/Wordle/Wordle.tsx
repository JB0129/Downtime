import React, { useEffect, useState } from "react";
import Answer from "./component/Answer";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";
import { Msg, WordleContainer } from "./Wordle.style";
import { useGetWord, usePostWord } from "../../hooks/wordleHook";
import { MainContainer } from "../../assets/layouts/layout.style";
import { GameTitle } from "../../assets/typography/typography.style";

const Wordle: React.FC = () => {
  // 입력된 오답 단어 모음
  const [isAnswer, setAnswer] = useState<Array<string>[]>([]);

  // 현재 입력중인 단어
  const [isWord, setWord] = useState<string[]>([]);

  // 게임 종료됐는지?
  const [complete, setComplete] = useState<boolean>(false);

  // 애니메이션 종류
  const [effect, setEffect] = useState<string>("");

  // 언급할 메시지
  const [msg, setMsg] = useState<string>("");

  // 오늘의 단어
  const { data: todayWord } = useGetWord();

  // 옳바른 단어인지 판단
  const answer = isWord.join("");
  const { mutate: checkWord } = usePostWord(answer, (res) => {
    if (!/[a-zA-Z]/.test(res)) {
      console.log(res);
      setAnswer((isAnswer) => [...isAnswer, isWord]);
      setWord([]);
      return;
    } else {
      setEffect("wrong");
      setTimeout(() => {
        setEffect("");
      }, 200);
      return setMsg("옳바른 단어를 입력해주세요.");
    }
  });

  // event key에 따른 단어입력, 발생 이벤트
  const insertWord = (key: string) => {
    if (/[a-zA-Z]/.test(key) && isWord.length < 5 && key.length === 1) {
      setWord((isWord) => [...isWord, key.toUpperCase()]);
      return setMsg("");
    }
    if ((key === "Backspace" || key === "←") && isWord.length > 0) {
      setWord((isWord) => isWord.slice(0, isWord.length - 1));
      return setMsg("");
    }
    if (key === "Enter") {
      if (isWord.length < 5) {
        setEffect("wrong");
        setTimeout(() => {
          setEffect("");
        }, 200);
        return setMsg("빈칸을 채워주세요.");
      } else if (isWord.length === 5) {
        if (todayWord === answer) {
          setAnswer((isAnswer) => [...isAnswer, isWord]);
          setComplete(true);
          setEffect("success");
          return setMsg("정답입니다!");
        } else {
          return checkWord();
        }
      }
    }
  };

  // window keydown 이벤트
  useEffect(() => {
    window.onkeydown = (e) => {
      if (!complete) {
        insertWord(e.key);
      }
    };
  }, [isWord, complete]);

  // 게임 오버 조건
  useEffect(() => {
    if (isAnswer.length >= 6 && !complete) {
      setComplete(true);
      setMsg("Game Over");
    }
  }, [isAnswer, complete]);

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
      <Keyboard
        insertWord={insertWord}
        isAnswer={isAnswer}
        complete={complete}
      />
    </MainContainer>
  );
};

export default Wordle;

/*
*. 이미 complete === true 이면, 이벤트 실행 x

1. 그냥 키 입력하면
 1) 5글자 다 입력했으면 더 입력 안됨
  >> if (isWord.length < 5)
 2) 일반 알파벳 키일때
  >> if (key.length === 1)
 3) 알파벳(대문자) 입력되어야함
  >> setWord((isWord) => [...isWord, key.toUpperCase()]);
 4) 언급 없음
  >> setMsg("");

2. if (Backspace || "←") 누르면
 1) 글자 다 삭제했으면 더 삭제 안됨
  >> if (isWord.length > 0)
 2) 알파벳 하나씩 지워져야함
  >> setWord((isWord) => isWord.slice(0, isWord.length - 1));
 3) 언급 없음
  >> setMsg("");

3. if (Enter) 누르면,
  1) 5글자 다 안채워짐
    (1) 오답 흔들리는 애니메이션
      >> setEffect("wrong");
    (2) 또 오답할 수도 있으니
      >> setTimeout(() => { setEffect(""); }, 200);
    (3) 모든 칸 채워달라고 하면서
      >> setMsg("빈칸을 채워주세요.");

  2) 5글자 다 채움
    (1) 정답인지 아닌지 판단
      a. 정답이면
        a) 완성했다는 로직
          >> setComplete(true);
        b) 대답에 추가
          >> setAnswer((isAnswer) => [...isAnswer, isWord]);
        c) 정답 애니메이션
          >> setEffect("success");
        d) 정답입니다 언급
          >> setMsg("정답입니다.");

      b. 정답 아니면
       a) 정확한 단어(존재하는 단어)인지 확인해야함. (api) >> checkWord()
        (a) 정확한 단어이면 >> if(!/[a-zA-Z]/.test(res))
          a) 대답에 추가
          >> setAnswer((isAnswer) => [...isAnswer, isWord]);
          b) input 창 word 초기화
          >> setWord([]);
        (b) 정확한 단어가 아니라면, 정확한 단어 입력 요구
          >> setEffect("wrong");
          >> setTimeout(() => { setEffect(""); }, 200);
          >> setMsg("옳바른 단어를 입력해주세요.");


< Other >
1. 6번의 기회가 끝났을 때 >> useEffect
 1) 기회 끝났다고 언급
 2) input 컴포넌트 없어짐

  >>  useEffect(() => {
        if (isAnswer.length >= 6) {
          setComplete(true);
          setMsg("Game Over");
        }
      }, [isAnswer]);
 
*/
