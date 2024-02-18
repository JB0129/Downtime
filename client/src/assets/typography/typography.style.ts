import styled from "styled-components";

export const GameTitle = styled.div`
  width: 90%;
  border-bottom: 2px solid ${({ theme }) => theme.style.color};
  color: ${({ theme }) => theme.style.color};
  font-size: 48px;
  font-weight: 600;
  padding: 30px 0px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
