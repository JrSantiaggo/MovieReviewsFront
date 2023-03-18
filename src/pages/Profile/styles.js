import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  header{
    width: 100%;
    height: 144px;
    padding: 64px 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_SECONDARY};
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 186px;
  height: 186px;
  border-radius: 50%;
  border: none;
  margin: -93px auto;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border: none;
  }
  label{
    width: 48px;
    height: 48px;
    border: none;
    position: absolute;
    bottom: 7px;
    right: 7px;
    background-color: ${({theme}) => theme.COLORS.CALL};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    svg{
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    input{
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 400px;
  margin: 157px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div:nth-child(3){
    margin-top: 25px;
  }
  > button{
    margin-top: 25px;
  }
`;