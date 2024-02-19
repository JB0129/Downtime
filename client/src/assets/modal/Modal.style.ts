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
  background-color: ${({ theme }) => theme.style.modal_backgroundColor};
  box-shadow: 1px 1px 5px 0.1px rgb(131, 131, 131);
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
  color: ${({ theme }) => theme.style.color};
  text-align: center;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnBox = styled.div`
  width: 100%;
  border-top: 1px solid rgb(80, 80, 80);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModalBtn = styled.button`
  width: 100%;
  max-height: 50px;
  min-height: 50px;
  padding: 10px 0px;
  color: ${({ theme }) => theme.style.color};
  text-align: center;
  font-weight: 600;
  &:hover {
    background-color: rgb(80, 80, 80);
  }
  &:active {
    background-color: rgb(70, 70, 70);
  }
`;

export const CheckBtn = styled(ModalBtn)``;

// export const PositiveBtn = styled(ModalBtn)``;
// export const NegativeBtn = styled(ModalBtn)``;
