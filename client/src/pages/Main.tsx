import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Choose game you want!</div>
      <button onClick={() => navigate("/wordle")}>Wordle</button>
      <button onClick={() => navigate("/none")}>none</button>
      <button onClick={() => navigate("/none")}>none</button>
      <button onClick={() => navigate("/none")}>none</button>
      <button onClick={() => navigate("/none")}>none</button>
      <button onClick={() => navigate("/none")}>none</button>
    </div>
  );
};

export default Main;
