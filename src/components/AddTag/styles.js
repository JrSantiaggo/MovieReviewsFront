import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_TERCEARY};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.TEXT}` : "none"};

  
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button {
    color: ${({theme}) => theme.COLORS.CALL};
  }


  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &&::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;