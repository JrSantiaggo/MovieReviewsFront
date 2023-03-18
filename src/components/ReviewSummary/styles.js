import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 32px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_SECONDARY};
  cursor: pointer;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

`;

export const Stars = styled.div`
  width: auto;
  height: 15px;
  display: flex;
  gap: 6px;
  justify-content: start;
  align-items: center;
  margin-top: 12px;

  > svg {
    width: 14px;
    height: 14px;
    color: ${({theme}) => theme.COLORS.CALL};
  }

`;

export const Summary = styled.span`
  width: 100%;
  height: 60px;
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: 16px;
  text-align: justify;
  overflow-y: hidden;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

