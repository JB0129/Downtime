import styled from "styled-components";

export const LoadingContainer = styled.div`
  background-color: rgb(120, 120, 120, 70%);
  z-index: 40;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  color: black;
`;

export const Loading_rotation = styled.div`
  animation: rotate 1s infinite;
  -moz-animation: rotate 1s infinite; /* Firefox */
  -webkit-animation: rotate 1s infinite; /* Safari and Chrome */
  -o-animation: rotate 1s infinite; /* Opera */
  animation-timing-function: linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    /* Firefox */
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    /* Safari and Chrome */
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes rotate {
    /* Opera */
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading_Word = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading_Letter = styled.li`
  background-color: rgb(253, 126, 149);
  border: 2px solid rgb(255, 255, 255);
  width: 100%;
  max-width: 70px;
  aspect-ratio: 1/1;
  margin: 0px 5px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;

  animation: bounce 1.2s 0s infinite ease-in-out;
  -moz-animation: bounce 1.2s 0s infinite ease-in-out; /* Firefox */
  -webkit-animation: bounce 1.2s 0s infinite ease-in-out; /* Safari and Chrome */
  -o-animation: bounce 1.2s 0s infinite ease-in-out; /* Opera */

  // 글자 순서대로 animation delay 적용
  &:nth-child(2) {
    animation-delay: 0.12s;
  }
  &:nth-child(3) {
    animation-delay: 0.24s;
  }
  &:nth-child(4) {
    animation-delay: 0.36s;
  }
  &:nth-child(5) {
    animation-delay: 0.48s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
  &:nth-child(7) {
    animation-delay: 0.72s;
  }
  &:nth-child(8) {
    animation-delay: 0.84s;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-40px);
    }
    40% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-moz-keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-webkit-keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-o-keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
