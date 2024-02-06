import styled from "styled-components";

export const MineContaier = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MineRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const MineBox = styled.button`
  background-color: #554343;
  border: 1px solid white;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #6e5858;
  }

  &:active {
    background-color: #372e2e;
  }
`;
