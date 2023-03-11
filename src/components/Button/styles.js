import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 22px;
  background-color: ${({theme}) => theme.COLORS.CALL};
  color: ${({theme}) => theme.COLORS.BLACK};
  border-radius: 10px;
  border: none;

  &disabled{
    opacity: 0.5;
  }
  > svg {
    margin-right: 10px;
  }
`;