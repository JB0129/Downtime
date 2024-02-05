import React, { useState } from "react";
import { MainContainer } from "./../../assets/layouts/layout.style";
import { GameTitle } from "../../assets/typography/typography.style";
import styled from "styled-components";

const Minesweeper: React.FC = () => {
  return (
    <MainContainer>
      <GameTitle>
        <span>Minesweeper</span>
      </GameTitle>
      <MineContaier>
        {["", "", "", "", "", "", "", "", ""].map((_: any, row: number) => {
          if (row < 9) {
            return (
              <MineRow key={row}>
                {["", "", "", "", "", "", "", "", ""].map(
                  (_: any, col: number) => {
                    if (col < 9) {
                      return <MineBox key={col}></MineBox>;
                    }
                  }
                )}
              </MineRow>
            );
          }
        })}
      </MineContaier>
    </MainContainer>
  );
};

export default Minesweeper;

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
