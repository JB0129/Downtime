import React from "react";
import { HeaderContainer, Logo } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { darkTheme, lightTheme, themeAtom } from "../../styles/theme";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const setTheme = useSetRecoilState(themeAtom);

  const toggleTheme = () =>
    setTheme((theme) => (theme.value === "light" ? darkTheme : lightTheme));

  const goBack = () => navigate(-1);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src="" alt="Logo" />
        </Link>
        <div>
          <Link to="/words">Words</Link>
          <Link to="/signUp">SignUp</Link>
        </div>
      </HeaderContainer>
      <div>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={toggleTheme}>테마 바꾸기</button>
      </div>
    </>
  );
};

export default Header;
