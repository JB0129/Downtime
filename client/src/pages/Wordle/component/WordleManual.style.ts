import styled from "styled-components";

export const ManualContainer = styled.div`
  background-color: ${({ theme }) => theme.style.modal_backgroundColor};
  box-shadow: 1px 1px 5px 0.1px rgb(131, 131, 131);
  border-radius: 18px;
  width: 100%;
  max-width: 650px;
  min-height: 650px;
  padding: 0px 10px 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ManualHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    color: ${({ theme }) => theme.style.color};
    width: 50px;
    font-size: 36px;
  }
`;

export const ManualContents = styled.ul`
  width: 100%;
`;

export const ManualTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.style.color};
  font-size: 28px;
  font-weight: 600;
`;

export const ManualContent = styled.li`
  width: 100%;
  padding-right: 15px;
`;

export const ManualContent_disc = styled.li`
  width: 100%;
  list-style-type: disc;
  margin: 10px 0px 30px 0px;
  padding-right: 15px;
  line-height: 1.3;
  color: ${({ theme }) => theme.style.color};
  span {
    font-weight: 600;
  }
  .correct {
    color: rgb(253, 126, 149);
  }
  .ambiguous {
    color: rgb(253, 244, 126);
  }
  .incorrect {
    color: rgb(143, 143, 143);
  }
`;
