import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgb(150, 150, 150, 40%);
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

export const ModalContainer = styled.div`
  border: 1px solid rgb(215, 215, 215);
  box-shadow: 1px 1px 5px 0.1px rgb(131, 131, 131);
  background-color: white;
  border: none;
  border-radius: 18px;
  width: 100%;
  max-width: 350px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
`;

export const ModalContents = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnBox = styled.div`
  width: 100%;
  border-top: 1px solid rgb(215, 215, 215);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModalBtn = styled.button`
  width: 100%;
  max-height: 50px;
  min-height: 50px;
  padding: 10px 0px;
  text-align: center;
  &:hover {
    background-color: rgb(215, 215, 215);
  }
  &:active {
    background-color: rgb(162, 162, 162);
  }
`;

export const CheckBtn = styled(ModalBtn)``;
// export const PositiveBtn = styled(ModalBtn)``;
// export const NegativeBtn = styled(ModalBtn)``;