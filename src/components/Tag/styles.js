import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.GRAY};
  border: none;
  border-radius: 10px;
  padding: 5px 16px;
  margin: 8px;
`;