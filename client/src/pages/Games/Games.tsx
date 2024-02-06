import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GameContent,
  GameDetail,
  GameImg,
  GameList,
  GameLists,
  GameName,
} from "./Games.style";
import { MainContainer } from "./../../assets/layouts/layout.style";
import { infoData } from "./information";
import { GameTitle } from "../../assets/typography/typography.style";

const Games: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <GameTitle>
        <span>Games</span>
      </GameTitle>
      <GameLists>
        {infoData.map((item, idx) => {
          if (item.name) {
            return (
              <GameList key={idx}>
                <GameContent onClick={() => navigate(item.endpoint)}>
                  {/* {<GameImg src={item.imgUrl && item.imgUrl} alt="" />} */}
                  <GameName>{item.name}</GameName>
                  <GameDetail>{item.description}</GameDetail>
                </GameContent>
              </GameList>
            );
          }
        })}
      </GameLists>
    </MainContainer>
  );
};

export default Games;
