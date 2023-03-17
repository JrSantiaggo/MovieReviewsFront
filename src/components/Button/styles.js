import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background-color: ${({theme, model}) => model == "primary" ? theme.COLORS.CALL : theme.COLORS.BLACK};
  color: ${({theme, model}) => model == "primary"? theme.COLORS.BLACK : theme.COLORS.CALL };
  border-radius: 10px;
  border: none;

  &disabled{
    opacity: 0.5;
  }
  > svg {
    margin-right: 10px;
  }
`;