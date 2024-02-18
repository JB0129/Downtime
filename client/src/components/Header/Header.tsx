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
import { useRecoilState, useSetRecoilState } from "recoil";
import { darkTheme, lightTheme, themeAtom } from "../../styles/theme";
import Toggle from "../../assets/button/Toggle";
import { alertAtom } from "../../recoil/atoms";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () =>
    setTheme((theme) => (theme.value === "light" ? darkTheme : lightTheme));

  const setAlert = useSetRecoilState(alertAtom);
  const handleAlert = () => setAlert("준비중입니다.");

  return (
    <HeaderContainer>
      <HeaderLine>
        <Logo onClick={() => navigate("/wordle")}>Downtime</Logo>
        <OptionBox>
          <Toggle
            isOn={theme.value === "light"}
            handleToggleFunc={toggleTheme}
          />
          {/* <Login onClick={() => navigate("/login")}> */}
          <Login onClick={() => handleAlert()}>
            <UserUnknown />
          </Login>
        </OptionBox>
      </HeaderLine>
      <Navs>
        {/* <Nav onClick={() => navigate("/")}>홈</Nav>
        <Nav onClick={() => navigate("/games")}>게임</Nav>
        <Nav onClick={() => navigate("/quiz")}>퀴즈</Nav>
        <Nav onClick={() => navigate("/ranking")}>랭킹</Nav>
        <Nav onClick={() => navigate("/community")}>커뮤니티</Nav> */}
        <Nav onClick={() => handleAlert()}>홈</Nav>
        <Nav onClick={() => handleAlert()}>게임</Nav>
        <Nav onClick={() => handleAlert()}>퀴즈</Nav>
        <Nav onClick={() => handleAlert()}>랭킹</Nav>
        <Nav onClick={() => handleAlert()}>커뮤니티</Nav>
      </Navs>
    </HeaderContainer>
  );
};

export default Header;
