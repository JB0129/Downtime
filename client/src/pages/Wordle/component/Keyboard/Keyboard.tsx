import React from "react";
import { KeyLine, KeyboardContainer, Keys } from "./Keyboard.style";

const Keyboard: React.FC = () => {
  const topKey = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "←"];
  const middleKey = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"];
  const bottomKey = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <KeyboardContainer>
      {
        <KeyLine>
          {topKey.map((el, idx) => (
            <Keys key={idx}>{el}</Keys>
          ))}
        </KeyLine>
      }
      <KeyLine>
        {middleKey.map((el, idx) => (
          <Keys key={idx}>{el}</Keys>
        ))}
      </KeyLine>
      <KeyLine>
        {bottomKey.map((el, idx) => (
          <Keys key={idx}>{el}</Keys>
        ))}
      </KeyLine>
    </KeyboardContainer>
  );
};

export default Keyboard;
