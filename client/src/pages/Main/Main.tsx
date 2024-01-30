import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GameContent,
  GameDetail,
  GameImg,
  GameList,
  GameLists,
  GameName,
  MainContainer,
} from "./Main.style";
import { infoData } from "./information";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      {/* <div>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <button>검색</button>
      </div> */}
      {/* <div>
        <button>싱글</button>
        <button>멀티</button>
      </div> */}
      <GameLists>
        {infoData.map((item, idx) => (
          <GameList key={idx}>
            <GameContent onClick={() => navigate(item.endpoint)}>
              {<GameImg src={item.imgUrl && item.imgUrl} alt="" />}
              <GameName>{item.name}</GameName>
              <GameDetail>{item.description}</GameDetail>
            </GameContent>
          </GameList>
        ))}
      </GameLists>
    </MainContainer>
  );
};

export default Main;
