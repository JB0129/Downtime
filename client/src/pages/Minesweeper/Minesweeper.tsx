import React, { useState } from "react";
import { MainContainer } from "./../../assets/layouts/layout.style";
import { GameTitle } from "../../assets/typography/typography.style";
import { MineBox, MineContaier, MineRow } from "./Minesweeper.style";

const Minesweeper: React.FC = () => {
  // 지뢰 필드
  const area: number[][] = [];

  // 한 변의 블록 개수
  const [line, setLine] = useState<number[]>([9, 9]);

  // 지뢰 개수
  const [mine, setMine] = useState<number>(10);

  // 유저에게 보이는 남은 지뢰 개수
  const [conut, setCount] = useState<number>(9);

  // 커스텀 모드
  const [custom, setCustom] = useState<boolean>(false);

  // 지뢰가 없으면 0, 있으면 1
  for (let i = 0; i < line[0]; i++) {
    area.push([]);
    for (let j = 0; j < line[1]; j++) {
      area[i].push(0);
    }
  }

  return (
    <MainContainer>
      <GameTitle>
        <span>Minesweeper</span>
      </GameTitle>
      <MineContaier>
        {area.map((row: any, rowNum: number) => {
          return (
            <MineRow key={rowNum}>
              {row.map((col: any, colNum: number) => {
                return (
                  <MineBox key={colNum} value={col}>
                    {col}
                  </MineBox>
                );
              })}
            </MineRow>
          );
        })}
      </MineContaier>
    </MainContainer>
  );
};

export default Minesweeper;
