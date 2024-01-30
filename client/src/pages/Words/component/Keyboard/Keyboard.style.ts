import styled from "styled-components";

export const KeyboardContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const KeyLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Keys = styled.button`
  width: 80px;
  height: 50px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 12px;

  &:hover {
  }
`;
