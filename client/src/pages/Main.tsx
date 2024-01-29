import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/wordle")}>Wordle</button>
        {/* <button onClick={() => navigate("/none")}>지뢰 찾기</button> */}
        <button onClick={() => navigate("/none")}>준비중</button>
        {/* <button onClick={() => navigate("/none")}>Ping Pong</button> */}
        <button onClick={() => navigate("/none")}>준비중</button>
        {/* <button onClick={() => navigate("/none")}>Jumping</button> */}
        <button onClick={() => navigate("/none")}>준비중</button>
        {/* <button onClick={() => navigate("/none")}>노래 맞추기(Single)</button> */}
        <button onClick={() => navigate("/none")}>준비중</button>
        {/* <button onClick={() => navigate("/none")}>노래 맞추기(Multi)</button> */}
        <button onClick={() => navigate("/none")}>준비중</button>
        <button onClick={() => navigate("/none")}>준비중</button>
        <button onClick={() => navigate("/none")}>준비중</button>
      </div>
    </div>
  );
};

export default Main;
