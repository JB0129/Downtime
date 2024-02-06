import React from "react";
import {
  HeaderContainer,
  HeaderLine,
  Logo,
  Navs,
  Nav,
  OptionBox,
  Login,
  ProFileImg,
  UserUnknown,
} from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { darkTheme, lightTheme, themeAtom } from "../../styles/theme";
import Toggle from "../../assets/button/Toggle";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () =>
    setTheme((theme) => (theme.value === "light" ? darkTheme : lightTheme));

  return (
    <HeaderContainer>
      <HeaderLine>
        <Logo onClick={() => navigate("/")}>Downtime</Logo>
        <OptionBox>
          <Toggle
            isOn={theme.value === "light"}
            handleToggleFunc={toggleTheme}
          />
          <Login onClick={() => navigate("/login")}>
            {/* <ProFileImg /> */}
            <UserUnknown />
          </Login>
        </OptionBox>
      </HeaderLine>
      <Navs>
        <Nav onClick={() => navigate("/")}>홈</Nav>
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
