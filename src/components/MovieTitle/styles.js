import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  h1{
    margin-right: 25px;
  }
`;

export const Stars = styled.div`
  width: auto;
  height: 25px;
  display: flex;
  gap: 5px;
  justify-content: start;
  align-items: center;
  margin-top: 12px;

  > svg {
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.COLORS.CALL};
  }

`;