import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  align-items: center;
  gap: 9px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_PRIMARY};
  border-bottom: 1px solid ${({theme}) => theme.COLORS.LINE};

  h1 {
    color: ${({theme}) => theme.COLORS.CALL};
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  } 
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.WHITE};
    }

    a {
    color: ${({theme}) => theme.COLORS.GRAY};
    font-size: 14px;
    font-weight: 400;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Search = styled.div`
  width: 700px;
`;