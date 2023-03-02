import Link from "next/link";
import Image from "next/image";
import {
  HomeProductContentStyled,
  HomeProductImageDivStyled,
  HomeProductImageStyled,
  HomeToProductLinkStyled,
  ImageContentColumnStyled,
  HomeProductEventCommentStyled,
  ImageContentColumnItemStyled,
} from "@/pages/index.styles";
import SwiperComponent from "@/components/Swiper/Swiper";

export default function Index() {
  return (
    <>
<<<<<<< HEAD
      <main>
        <div className={styles.logInNav}>이경은님/로그아웃</div>
        {/* <Head>
          <div className={styles.head}>문구판매 사이트입니당근!</div>
        </Head> */}
        <article>
          <div
            className={styles.menuNav}
            css={{
              "&:hover": {
                color: "#79a2d370",
              },
            }}
          >
            <p>홈</p>
            <p>문구</p>
            <p>커뮤니티</p>
            <a href = '/my-page'>마이페이지</a>
          </div>
          <div className={styles.Banner}>
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
          </div>
          <div className={styles.event}>
            <a href = '/order'>주문페이지 바로가기</a>
            <p>2.13(월) ~ 2.26(일)</p>
            <p>새로운 학기의 시작</p>
            <p>
              설레는 마음으로 새 학기를 준비하는 모든 이들을 위한 컬렉션.
              <br />
              사조몰 멤버들을 위한 최대 25% 할인 혜택을 지금 만나보세용가리
            </p>
            <p>컬렉션 구매하기</p>
          </div>
          <div className={styles.items}>
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <br />
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
            <br />
            {/* next js는 기본 경로가 public */}
          </div>
          <div className={styles.secondBanner}>
            <p>핑순이들 모여라~</p>
            <p>핑크색 다쿠 아이템만 모은 특별 기획!</p>
          </div>
          <div className={styles.community}>
            <p>내 탑꾸 어때?</p>
            <div className={styles.communityList}>
              <img
                src="/img/item01.png"
                alt="item"
                className={styles.itemImg}
              />
              <img
                src="/img/item01.png"
                alt="item"
                className={styles.itemImg}
              />
              <img
                src="/img/item01.png"
                alt="item"
                className={styles.itemImg}
              />
              <br />
              레트로 레트로 레트로
            </div>
          </div>
          {/* <Button /> */}
          {/*<ProductsGrid posts />*/}
        </article>
      </main>
=======
      <SwiperComponent />
      <HomeProductEventCommentStyled>
        <h2>새로운 학기가 시작되면 설레는 마음이 가득!</h2>
        <p>
          설레는 마음으로 준비한 문구로 채워진 일상, 더욱 멋지게 꾸며보아요!
        </p>
      </HomeProductEventCommentStyled>

      <HomeProductContentStyled>
        <ImageContentColumnStyled>
          <Link href="/products?category=watch">
            <Image
              src="/img/products/clock.png"
              alt="시계"
              width={200}
              height={200}
            />
          </Link>

          <Link href="/products?category=write">
            <Image
              src="/img/products/crayon.png"
              alt="크레용"
              width={250}
              height={200}
            />
          </Link>

          <Link href="/products?category=film">
            <Image
              src="/img/products/flim.png"
              alt="필름"
              width={200}
              height={150}
            />
          </Link>
          <Link href="/products?category=pencil">
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
        </ImageContentColumnStyled>
      </HomeProductContentStyled>
>>>>>>> f954cc3d7eadcae09578710c704d2b47711dae03
    </>
  );
}
