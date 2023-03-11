import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const NewMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px auto 0;
  max-width: 1200px;

  > button {
    width: 214px;
  }
  
`;

export const MovieList = styled.div`
  margin: 60px auto 0;
  max-width: 1300px;
  height: 850px;
  overflow-y: auto;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 40px;
    
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.CALL};
    border-radius: 7px;
    
  }

`;