import styled from "styled-components";
import backgroundimg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 263px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.CALL};
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY};
  }
  > a {
    margin-top: 124px;
    color: ${({theme}) => theme.COLORS.CALL};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) no-repeat center;
  background-size: cover;
`;