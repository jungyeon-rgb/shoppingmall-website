import styled from "@emotion/styled";

export const ProductContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
`;

export const ProductContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 150px;
  & p {
    font-size: 20px;
    margin: 10px;
  }
`;
export const ProductContentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductContentCountInput = styled.input`
  margin: 10px;
  width: 60px;
  height: 40px;
  font-size: 20px;
  text-align: center;

  border: 2px solid #000000;
`;
export const ProductContentToCartButton = styled.button`
  margin: 10px;
  width: 120px;
  height: 40px;
  font-size: 15px;
  text-align: center;

  background-color: #000000;
  color: #ffffff;
`;
