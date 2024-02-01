import styled from "styled-components";

export const GameLists = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  gap: 20px;
  justify-items: center;

  // 데스크탑
  grid-template-columns: repeat(4, 1fr);

  // 타블렛
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // 모바일
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  border: 1px solid blue;
`;

export const GameList = styled.div`
  width: 220px;
`;

export const GameContent = styled.button`
  width: 100%;
  padding: 5px;
  border-radius: 12px;
  overflow: hidden;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

export const GameImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;

  background-color: skyblue;
`;

export const GameName = styled.div`
  width: 100%;
  padding: 10px 5px 5px 5px;
  text-align: start;
  font-size: 16px;
  font-weight: 600;
`;

export const GameDetail = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 12px;
  text-align: start;
`;
