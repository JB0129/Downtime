import styled from "styled-components";

export const GameTitle = styled.div`
  width: 90%;
  border-bottom: 2px solid ${({ theme }) => theme.style.textColor};
  color: ${({ theme }) => theme.style.textColor};
  font-weight: 600;
  padding: 30px 0px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 48px;
  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
  @media screen and (max-width: 350px) {
    font-size: 32px;
  }

  .question {
    color: ${({ theme }) => theme.style.question_bgColor};
    width: 30px;
    height: 30px;
    margin: 15px 10px 0px 10px;
    cursor: pointer;
  }

  .question:hover {
    color: ${({ theme }) => theme.style.question_bgColor_hover};
  }

  .question:active {
    color: ${({ theme }) => theme.style.question_bgColor_active};
  }
`;
