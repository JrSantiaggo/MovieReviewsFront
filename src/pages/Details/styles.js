import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  main{
    
    overflow-y: auto;
    margin: 30px auto 0;
    width: 1200px;
    display: flex;
    flex-direction: column;
    height: 783px;
    padding: 40px;
    gap: 30px;
    align-items: flex-start;
    
    h1{
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
    }
    p{
      color: ${({theme}) => theme.COLORS.WHITE};
      margin-top: 20px;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: justify;
    }
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

  }
`;

