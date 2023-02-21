import styled from '@emotion/styled';

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 1080px;
`;

export const StyledProductAnchor = styled.a`
  text-decoration: none;
  width: 100%;
  max-width: 350px;
  flex: 0 1 350px;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductInfo = styled.div`
  padding-top: 12px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #686fe8;
  }
`;

export const StyledProductTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const StyledProductPrice = styled.p`
  font-size: 14px;
  margin: 8px 0 0 0;
  padding: 0;
  text-decoration: none;
`;
