import React from "react";
import { WordInput } from "./Words.style";

const Words: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <WordInput />
          <WordInput />
          <WordInput />
          <WordInput />
          <WordInput />
        </div>
      </div>
    </>
  );
};

export default Words;
