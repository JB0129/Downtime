import React, { useRef, useState } from "react";
import { Words, Word, Letter } from "./Words.style";

const TodayWord = "avoid";

const Wordle: React.FC = () => {
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

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.target === firstRef.current) {
      if (isWord.first.length > 0) secondRef.current?.focus();
    } else if (e.target === secondRef.current) {
      if (isWord.second.length > 0) thirdRef.current?.focus();
    } else if (e.target === thirdRef.current) {
      if (isWord.third.length > 0) forthRef.current?.focus();
    } else if (e.target === forthRef.current) {
      if (isWord.forth.length > 0) fifthRef.current?.focus();
    } else if (e.target === fifthRef.current) {
      if (isWord.fifth.length > 0) if (e.key === "Enter") setComplete(true);
    }
  };

  return (
    <div>
      {!complete ? (
        <Words>
          <Word>
            <Letter
              ref={firstRef}
              value={isWord.first}
              onChange={(e) => setWord({ ...isWord, first: e.target.value })}
              onKeyUp={(e) => handleInput(e)}
            />
            <Letter
              ref={secondRef}
              value={isWord.second}
              onChange={(e) => setWord({ ...isWord, second: e.target.value })}
            />
            <Letter
              ref={thirdRef}
              value={isWord.third}
              onChange={(e) => setWord({ ...isWord, third: e.target.value })}
            />
            <Letter
              ref={forthRef}
              value={isWord.forth}
              onChange={(e) => setWord({ ...isWord, forth: e.target.value })}
            />
            <Letter
              ref={fifthRef}
              value={isWord.fifth}
              onChange={(e) => setWord({ ...isWord, fifth: e.target.value })}
            />
          </Word>
        </Words>
      ) : (
        <Words>
          <div>{isWord.first}</div>
          <div>{isWord.second}</div>
          <div>{isWord.third}</div>
          <div>{isWord.forth}</div>
          <div>{isWord.fifth}</div>
        </Words>
      )}
    </div>
  );
};

export default Wordle;
