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

export const HomeImageSlideStyled = styled.div`
  align-items: center;
  justify-content: center;

  #slide {
    width: 100%;
    padding: 0 15vw;
    position: relative;
    margin: 1vw 0 0 0;
  }

  #slide i {
    font-size: 30px;
  }

  #slide .slider-container {
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
  }

  #slide .slider-container span {
    position: absolute;
    z-index: 99;
    top: 50%;
    cursor: pointer;
  }

  #slide .slider-container .leftBtn {
    left: 12%;
    transform: translate(0, -50%);
  }

  #slide .slider-container .rightBtn {
    right: 12%;
    transform: translate(0, -50%);
  }

  #slide .slider-container .slider {
    display: flex;
    width: 101%;
  }

  #slide .slider-container .slider span {
    display: block;
    position: relative;
    min-width: 100%;
  }

  #slide .slider-container .slider span .text-wrap {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(0, -50%);
    width: 29%;
    color: #fff;
  }

  #slide .slider-container .slider span .text-wrap h1 {
    line-height: 140%;
    font-size: 33px;
  }

  #slide .slider-container .slider span .text-wrap h4 {
    font-size: 13px;
    margin: 30px 0 0 0;
  }

  #slide .slider-container .slider span .text-wrap h5 {
    line-height: 140%;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0 0 10px 0;
  }

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// export const HomeProductTitleStyled = styled.img``
