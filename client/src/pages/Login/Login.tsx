import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../../assets/layouts/layout.style";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("로그인!");
  };

  return (
    <MainContainer>
      <form>
        <div>
          <span>아이디</span>
          <input />
        </div>
        <div>
          <span>비밀번호</span>
          <input />
        </div>
        <button type="submit" onClick={handleSubmit}>
          로그인
        </button>
      </form>
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/main")}>로그인 없이 시작하기</button>
    </MainContainer>
  );
};

export default Login;
