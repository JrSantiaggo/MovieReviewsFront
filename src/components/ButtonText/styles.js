import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({theme}) => theme.COLORS.CALL};
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 400;
  &disabled{
    opacity: 0.5;
  }
  > svg {
    margin-right: 10px;
    color: ${({theme}) => theme.COLORS.CALL};
  }
`;