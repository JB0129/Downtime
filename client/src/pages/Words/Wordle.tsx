import React, { useState } from "react";
import WordInput from "./component/WordInput";
import Keyboard from "./component/Keyboard/Keyboard";

const solve = "happy";

const Wordle: React.FC = () => {
  const [times, setTimes] = useState([1]);
  const handleMoreChance = () =>
    setTimes((times) => [...times, times.length + 1]);

  return (
    <div>
      <div>
        {times.map((times: number) => (
          <WordInput
            key={times}
            solve={solve}
            handleMoreChance={handleMoreChance}
          />
        ))}
      </div>
      {/* <Keyboard /> */}
    </div>
  );
};

export default Wordle;
