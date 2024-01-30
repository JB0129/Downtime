import React from "react";
import {
  HeaderContainer,
  HeaderLine,
  Logo,
  LogoImg,
  Navs,
  Nav,
} from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { darkTheme, lightTheme, themeAtom } from "../../styles/theme";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const setTheme = useSetRecoilState(themeAtom);

  const toggleTheme = () =>
    setTheme((theme) => (theme.value === "light" ? darkTheme : lightTheme));

  return (
    <HeaderContainer>
      <HeaderLine>
        <Logo onClick={() => navigate("/main")}>
          <LogoImg src="" alt="Logo" />
        </Logo>
        <div>
          <button onClick={toggleTheme}>테마 바꾸기</button>
          <button onClick={() => navigate("/")}>로그인</button>
        </div>
      </HeaderLine>
      <Navs>
        <Nav onClick={() => navigate("/main")}>홈</Nav>
        <Nav onClick={() => navigate("/games")}>게임</Nav>
        <Nav onClick={() => navigate("/quiz")}>퀴즈</Nav>
        <Nav onClick={() => navigate("/ranking")}>랭킹</Nav>
        <Nav onClick={() => navigate("/community")}>게시판</Nav>
        <Nav onClick={() => navigate("/notices")}>공지사항</Nav>
      </Navs>
    </HeaderContainer>
  );
};

export default Header;
