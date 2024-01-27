import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Hello World!</div>
      <button onClick={() => navigate("/main")}>Play</button>
    </div>
  );
};

export default Home;
