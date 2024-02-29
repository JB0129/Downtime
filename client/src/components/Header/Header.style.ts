import styled from "styled-components";
import { ReactComponent as Downtime } from "./../../assets/images/Downtime.svg";
import { ReactComponent as Person } from "./../../assets/images/Person.svg";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const HeaderLine = styled.div`
  background-color: ${({ theme }) => theme.style.bgColor};
  width: 100%;
  max-width: 1170px;
  height: 55px;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Downtime)`
  padding: 0px 10px;
  height: 100%;
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.style.textColor};
  }
`;

export const Navs = styled.nav`
  background-color: ${({ theme }) => theme.style.header_bgColor};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.button`
  background-color: ${({ theme }) => theme.style.header_bgColor};
  width: 120px;
  height: 100%;
  white-space: nowrap;
  font-weight: bold;
  color: ${({ theme }) => theme.style.textColor};

  font-size: 16px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.style.header_bgColor_hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.style.header_bgColor_active};
  }
`;

export const OptionBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Login = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.style.header_bgColor};
`;

export const ProFileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const UserUnknown = styled(Person)`
  width: 90%;
  height: 90%;
  path {
    fill: ${({ theme }) => theme.style.bgColor};
  }
`;
