import styled from "styled-components";

export const KeyboardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border: 1px solid black;
`;

export const KeyLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Keys = styled.button`
  flex: 1 0 auto;
  min-width: 45px;
  height: 45px;
  margin: 5px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;

  border: 1px solid black;

  &:hover {
  }
`;
