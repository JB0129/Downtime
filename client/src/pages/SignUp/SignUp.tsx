import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./../../assets/layouts/layout.style";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      SignUp
      <button onClick={() => navigate("/")}>로그인</button>
    </MainContainer>
  );
};

export default SignUp;
