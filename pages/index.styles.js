import styled from "@emotion/styled";

// export const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;

//   &:hover {
//     color: white;
//   }
// `;
// /*flex-direction: column;

export const HomeImageSlideStyled = styled.div`
  height: 300px;
  width: 90%;
  display: flex;
  & > .swiper {
    align-items: center;
    justify-content: center;
  }
`;
export const HomeProductEventCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px auto;

          <h1>이미지슬라이드</h1>
`;

export const HomeProductContentStyled = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin: 60px auto;
  height: 600px;
  width: 95%;

  // background-color: #f7da64;

  font-size: 20px;
  & > p {
    margin: 5px auto;
  }
`;

export const ImageContentRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;

  & > Img {
    margin: 0 20px;
  }
`;

export const HomeToProductLinkStyled = styled.button`
  border: none;
  background-color: transparent;

  margin: 10px;
  font-size: 15px;
  // font-color: #f7da64;
  // text-decoration-line: none;
`;
export const HomeProductImageDivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1600px;
`;

export const HomeProductImageStyled = styled.img`
  width: 200px;
  height: 350px;

  margin: 20px 35px;

  border: 3px solid #5fafd4;
  background-color: #5fafd4;
  border-radius: 35% 35% 35% 0;
`;
// export const HomeProductTitleStyled = styled.img``
