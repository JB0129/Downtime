import React from "react";
import {
  Loading_Word,
  Loading_Letter,
  LoadingContainer,
} from "./Loading.style";

interface OwnProps {
  word: string;
}

const Loading_main: React.FC<OwnProps> = ({ word }) => {
  const letters = word.split("");

  return (
    <LoadingContainer>
      <Loading_Word>
        {letters.map((el, idx) => (
          <Loading_Letter key={idx}>
            <div>{el}</div>
          </Loading_Letter>
        ))}
      </Loading_Word>
    </LoadingContainer>
  );
};

export default Loading_main;
