import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css"; // *.module.css | scss | sass
import {
  HomeProductContentStyled,
  HomeProductImageDivStyled,
  HomeProductImageStyled,
  HomeToProductLinkStyled,
} from "@/pages/index.styles";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <div className={styles.logInNav}>이경은님/로그아웃</div>
      <a href="/order">주문페이지 바로가기</a>
      <HomeProductContentStyled>
        <h4>3.3(금) ~ 3.10(금)</h4>
        <h2>새로운 학기의 시작</h2>
        <p>설레는 마음으로 새 학기를 준비하는 모든 이들을 위한 컬렉션.</p>
        <p>사조몰 멤버들을 위한 최대 25% 할인 혜택을 지금 만나보세용가리</p>
        <HomeToProductLinkStyled>
          <Link href="/products">제품 구경하러 가기</Link>
        </HomeToProductLinkStyled>
      </HomeProductContentStyled>
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
      </HomeProductImageDivStyled>
      {/* next js는 기본 경로가 public */}
    </>
  );
}
