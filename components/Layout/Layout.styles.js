import styled from '@emotion/styled';

export const LayoutHeaderStyled = styled.header`

`;

export const LayoutHeaderLogoStyled = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > a {
    text-decoration: none;
    color: #ff000070;
    font-weight: 600;
    font-size: 42px;
  }
  
`;

export const LayoutHeaderNavStyled = styled.nav`
  
`;

export const LayoutHeaderNavUlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const LayoutHeaderNavLiStyled = styled.li`
    padding: 0 10px;
    list-style: none;
  
  & > a {
    text-decoration: none;
    color: #4569f7;
  } 
  
`;