import styled from "styled-components";

export const ManualContainer = styled.div`
  background-color: ${({ theme }) => theme.style.modal_bgColor};
  box-shadow: 1px 1px 5px 0.1px rgb(131, 131, 131);
  border-radius: 18px;
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0px 10px 0px 50px;
  @media screen and (max-width: 500px) {
    padding: 0px 10px 0px 40px;
  }
  @media screen and (max-width: 400px) {
    padding: 0px 10px 0px 30px;
  }
`;

export const ManualHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    color: ${({ theme }) => theme.style.textColor};
    width: 50px;
    font-size: 36px;
  }
`;

export const ManualContents = styled.ul`
  width: 100%;
`;

export const ManualTitle = styled.li`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.style.textColor};
  font-size: 28px;
  font-weight: 600;
`;

export const ManualContent_disc = styled.li`
  width: 100%;
  list-style-type: disc;
  margin: 10px 0px 30px 0px;
  padding-right: 15px;
  line-height: 1.3;
  color: ${({ theme }) => theme.style.textColor};

  transition: 300ms;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 350px) {
    font-size: 13px;
  }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }

  span {
    font-weight: 600;
  }
  .correct {
    color: ${({ theme }) => theme.style.letter_bgColor_correct};
  }
  .ambiguous {
    color: ${({ theme }) => theme.style.letter_bgColor_ambiguous};
  }
  .incorrect {
    color: ${({ theme }) => theme.style.letter_bgColor_incorrect};
  }
`;

export const ManualContent = styled.ul`
  width: 100%;
  padding-right: 15px;
  div {
    transition: 300ms;

    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 25px;
    }
    @media screen and (max-width: 350px) {
      font-size: 20px;
    }
    @media screen and (max-width: 300px) {
      font-size: 15px;
    }
  }
`;
