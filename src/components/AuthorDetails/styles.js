import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;

  img{
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  svg {
    width: 17px;
    height: 17px;
    color: ${({theme}) => theme.COLORS.CALL};
  }
`;