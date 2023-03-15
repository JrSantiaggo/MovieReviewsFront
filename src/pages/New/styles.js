import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

`;

export const Inputs = styled.div`
  margin: 60px auto 0;
  width: 950px;
  display: flex;
  flex-direction: column;
  height: 783px;
  padding: 10px;
  gap: 20px;

  h2 {
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: 20px;
    font-weight: 400;
  }

`;

export const TwoInput = styled.div`
  width: 100%;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Marcadores = styled.div`
  width: 100%;
  height: 88px;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  background: ${({theme}) => theme.COLORS.BLACK};
  
`;