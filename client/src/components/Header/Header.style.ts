import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const HeaderLine = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 55px;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.button`
  width: 150px;
  height: 100%;

  border: 1px solid black;
`;

export const LogoImg = styled.img``;

export const Navs = styled.nav`
  background-color: ${({ theme }) => theme.style.headerColor};
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.button`
  background-color: ${({ theme }) => theme.style.headerColor};
  width: 120px;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
`;
