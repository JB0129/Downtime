import React, { useEffect, useState } from "react";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";

const solve = "happy";

const Wordle: React.FC = () => {
  const [times, setTimes] = useState([1]);
  const handleMoreChance = () =>
    setTimes((times) => [...times, times.length + 1]);

  const [isWord, setWord] = useState<string[]>([]);
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    if (!complete) {
      window.onkeydown = (e) => {
        if (/[a-zA-Z]/.test(e.key) && e.key.length === 1 && isWord.length < 5) {
          console.log(e.key);
          setWord((isWord) => [...isWord, e.key.toUpperCase()]);
        }
        if (e.key === "Backspace" && isWord.length > 0) {
          setWord((isWord) => isWord.slice(0, isWord.length - 1));
        }
        if (e.key === "Enter" && isWord.length === 5) {
          setComplete(true);
        }
      };
    }
  }, [isWord]);

  useEffect(() => {
    if (complete) {
      const answer = isWord.join("");
      if (solve.toUpperCase() !== answer) {
        handleMoreChance();
      } else {
        alert("정답입니다!");
      }
    }
  }, [complete]);

  return (
    <div>
      <div>
        {times.map((times: number) => (
          <WordInput key={times} isWord={isWord} />
        ))}
      </div>
      {/* <Keyboard /> */}
    </div>
  );
};

export default Wordle;
