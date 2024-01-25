import React, { useState } from "react";
import WordInput from "./WordInput";

const solve = "happy";

const Wordle = () => {
  const [times, setTimes] = useState([1]);
  const handleMoreChance = () =>
    setTimes((times) => [...times, times.length + 1]);

  return (
    <div>
      {times.map((times: number) => (
        <WordInput
          key={times}
          solve={solve}
          handleMoreChance={handleMoreChance}
        />
      ))}
    </div>
  );
};

export default Wordle;
