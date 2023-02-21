import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css'; // *.module.css | scss | sass
import { Button, Title1 } from '@fluentui/react-components';
import { css } from '@emotion/react';
import ProductsGrid from './products/products-grid';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  return (
    <>
      <main>
        <div className={styles.logInNav}>이경은님/로그아웃</div>
        {/* <Head>
          <div className={styles.head}>문구판매 사이트입니당근!</div>
        </Head> */}
        <article>
          <div
            className={styles.menuNav}
            css={{
              '&:hover': {
                color: '#79a2d370',
              },
            }}
          >
            <p>홈</p>
            <p>문구</p>
            <p>커뮤니티</p>
            <p>마이페이지</p>
          </div>
          <div className={styles.Banner}>
            <img src="/img/item01.png" alt="item" className={styles.itemImg} />
          </div>
          <div className={styles.event}>
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
          <Button>^</Button>
          {/*<ProductsGrid posts />*/}
        </article>
      </main>
    </>
  );
}
