import React from "react";
import { MainContainer } from "./../../assets/layouts/layout.style";
import { MusicContainer } from "./FindMusic.style";

const FindMusic: React.FC = () => {
  return (
    <MainContainer>
      <MusicContainer>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio>
          <source src="" type="" />
          <track src="sub_kr.vtt" kind="subtitles" label="Korean" />
        </audio>
      </MusicContainer>
    </MainContainer>
  );
};

export default FindMusic;
