import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>Choose game you want!</div>
        <h2>Single game</h2>
        <button onClick={() => navigate("/wordle")}>Wordle</button>
        <button onClick={() => navigate("/none")}>준비중</button>
        <button onClick={() => navigate("/none")}>준비중</button>
      </div>
      <div>
        <h2>Multiple game</h2>
        <button onClick={() => navigate("/none")}>준비중</button>
        <button onClick={() => navigate("/none")}>준비중</button>
        <button onClick={() => navigate("/none")}>준비중</button>
      </div>
    </div>
  );
};

export default Main;
