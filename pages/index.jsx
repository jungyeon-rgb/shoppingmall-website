import styles from "@/styles/Home.module.css"; // *.module.css | scss | sass
import {
  HomeProductContentStyled,
  HomeProductImageDivStyled,
  HomeProductImageStyled,
  HomeToProductLinkStyled,
  ImageContentRowStyled,
  HomeProductEventCommentStyled,
  HomeImageSlideStyled,
} from "@/pages/index.styles";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeImageSlideStyled>
        <h1>이미지슬라이드</h1>

        <div id="slide">
          <div className="slider-container">
            <span className="leftBtn">
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <div className="slider">
              <span className="first-img">
                <div className="text-wrap">
                  <h5>WEEKLY DESIGN</h5>
                  <h1>사용자가 좋아하는 스티</h1>
                  <h4>WEB/APP 바로가기 </h4>
                </div>
                <img src="4.png" alt="0" />
              </span>
              <span>
                <div className="text-wrap">
                  <h5>Diary</h5>
                  <h1>다꾸해볼래?</h1>
                  <h4>다이어리 구경가기 {">"}</h4>
                </div>
                <img src="1.png" alt="1" />
              </span>
              <span>
                <div className="text-wrap">
                  <h5>낭만되찾기</h5>
                  <h1>낭만 그 잡채, 그것은 엽서랄까나,,,</h1>
                  <h4>엽서구경가기 {">"}</h4>
                </div>
                <img src="2" alt="2" />
              </span>
              <span>
                <div className="text-wrap">
                  <h5>필기구</h5>
                  <h1>흰 노트와 새 필기구만 있다면 어디든지 갈 수 있어</h1>
                  <h4>필기구 구경가기{">"}</h4>
                </div>
                <img src="3" alt="3" />
              </span>
              <span className="last-img">
                <div className="text-wrap">
                  <h5>감성의 끝판왕</h5>
                  <h1>GenZ라면 필름 하나쯤 있어야지</h1>
                  <h4>필름 구매하러 가기 {">"}</h4>
                </div>
                <img src="1.png" alt="4" />
              </span>
            </div>
            <span className="rightBtn">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </HomeImageSlideStyled>
      {/* <HomeProductEventCommentStyled>
        <h4>3.3(금) ~ 3.10(금)</h4>
        <h2>새로운 학기가 시작되면 설레는 마음이 가득!</h2>
        <p>설레는 마음으로 준비하는 모든 이들을 위한 컬렉션.</p>
        <p>사달라들을 위한 최대 25% 할인 혜택을 지금 만나보세용가리</p>
        <p>문구로 채워진 일상, 더욱 멋게게 꾸며보아요!</p>
      </HomeProductEventCommentStyled> */}

      <HomeProductContentStyled>
        <ImageContentRowStyled>
          <Link href="/products">
            <Image
              src="/img/products/clock.png"
              alt="시계"
              width={200}
              height={200}
            />
          </Link>
          <Link href="/products">
            <Image
              src="/img/products/crayon.png"
              alt="크레용"
              width={250}
              height={200}
            />
          </Link>
          <Link href="/products">
            <Image
              src="/img/products/flim.png"
              alt="필름"
              width={200}
              height={150}
            />
          </Link>
          <Link href="/products">
            <Image
              src="/img/products/pencil.png"
              alt="연필"
              width={250}
              height={100}
            />
          </Link>
          <Link href="/products">
            <Image
              src="/img/products/postcard.png"
              alt="엽서"
              width={200}
              height={200}
            />
          </Link>
        </ImageContentRowStyled>
      </HomeProductContentStyled>
      {/* 
      <HomeProductImageDivStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
      </HomeProductImageDivStyled>
      <HomeProductImageDivStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
      </HomeProductImageDivStyled>
      <HomeProductImageDivStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
        <HomeProductImageStyled></HomeProductImageStyled>
      </HomeProductImageDivStyled> */}
      {/* next js는 기본 경로가 public */}
    </>
  );
}
