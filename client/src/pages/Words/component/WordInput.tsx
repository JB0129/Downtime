import React, { useEffect, useRef, useState } from "react";
import { Words, Word, Letter, LetterBox } from "./../Words.style";

interface OwnProps {
  solve: string;
  handleMoreChance: () => void;
}

const WordInput: React.FC<OwnProps> = ({ solve, handleMoreChance }) => {
  const [complete, setComplete] = useState(false);
  const [isWord, setWord] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
    fifth: "",
  });

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const forthRef = useRef<HTMLInputElement>(null);
  const fifthRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value) {
        if (e.target === firstRef.current) {
          secondRef.current?.focus();
        } else if (e.target === secondRef.current) {
          thirdRef.current?.focus();
        } else if (e.target === thirdRef.current) {
          forthRef.current?.focus();
        } else if (e.target === forthRef.current) {
          fifthRef.current?.focus();
        } else if (e.target === fifthRef.current) {
          // 빈칸이 있을때 알림 처리
          if (Object.values(isWord).includes("")) {
            alert("빈칸이 있습니다.");
            return;
          }
          setComplete(true);
        }
      }
    }

    if (e.key === "Backspace") {
      if (e.currentTarget.value) return;
      else {
        if (e.target === secondRef.current) {
          firstRef.current?.focus();
        } else if (e.target === thirdRef.current) {
          secondRef.current?.focus();
        } else if (e.target === forthRef.current) {
          thirdRef.current?.focus();
        } else if (e.target === fifthRef.current) {
          forthRef.current?.focus();
        }
      }
    }

    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
      if (e.target === firstRef.current) {
        if (isWord.first.length) secondRef.current?.focus();
      } else if (e.target === secondRef.current) {
        if (isWord.second.length) thirdRef.current?.focus();
      } else if (e.target === thirdRef.current) {
        if (isWord.third.length) forthRef.current?.focus();
      } else if (e.target === forthRef.current) {
        if (isWord.forth.length) fifthRef.current?.focus();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/[a-zA-z]/.test(e.currentTarget.value) || !e.currentTarget.value) {
      const value = e.currentTarget.value.toLowerCase(); // 소문자로 통일
      if (e.target === firstRef.current) {
        setWord({ ...isWord, first: value });
      } else if (e.target === secondRef.current) {
        setWord({ ...isWord, second: value });
      } else if (e.target === thirdRef.current) {
        setWord({ ...isWord, third: value });
      } else if (e.target === forthRef.current) {
        setWord({ ...isWord, forth: value });
      } else if (e.target === fifthRef.current) {
        setWord({ ...isWord, fifth: value });
      }
    }
  };

  useEffect(() => {
    firstRef.current?.focus();

    if (complete) {
      const answer = Object.values(isWord).join("");
      if (solve !== answer) {
        handleMoreChance();
      } else {
        alert("정답입니다!");
      }
    }
  }, [complete]);

  return (
    <div>
      {!complete ? (
        <Words>
          <Word>
            <Letter
              ref={firstRef}
              value={isWord.first}
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleKeyUp(e)}
              type="text"
              maxLength={1}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Tab") return;
              }}
            />
            <Letter
              ref={secondRef}
              value={isWord.second}
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleKeyUp(e)}
              type="text"
              maxLength={1}
            />
            <Letter
              ref={thirdRef}
              value={isWord.third}
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleKeyUp(e)}
              type="text"
              maxLength={1}
            />
            <Letter
              ref={forthRef}
              value={isWord.forth}
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleKeyUp(e)}
              type="text"
              maxLength={1}
            />
            <Letter
              ref={fifthRef}
              value={isWord.fifth}
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleKeyUp(e)}
              type="text"
              maxLength={1}
            />
          </Word>
        </Words>
      ) : (
        <Words>
          <Word>
            <LetterBox>
              <div>{isWord.first}</div>
            </LetterBox>
            <LetterBox>
              <div>{isWord.second}</div>
            </LetterBox>
            <LetterBox>
              <div>{isWord.third}</div>
            </LetterBox>
            <LetterBox>
              <div>{isWord.forth}</div>
            </LetterBox>
            <LetterBox>
              <div>{isWord.fifth}</div>
            </LetterBox>
          </Word>
        </Words>
      )}
    </div>
  );
};

export default WordInput;
