import Link from 'next/link';
import {
  LayoutHeaderLogoStyled,
  LayoutHeaderNavLiStyled,
  LayoutHeaderNavStyled,
  LayoutHeaderNavUlStyled,
  LayoutHeaderStyled,
} from '@/components/Layout/Layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <LayoutHeaderStyled>
        <LayoutHeaderLogoStyled>
          <Link href="/">Sadalla</Link>
        </LayoutHeaderLogoStyled>
        <LayoutHeaderNavStyled>
          <LayoutHeaderNavUlStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products">제품 전체</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?=note">노트</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?=sticker">스티커</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?=pencil">필기구</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/my-page">장바구니</Link>
            </LayoutHeaderNavLiStyled>
          </LayoutHeaderNavUlStyled>
        </LayoutHeaderNavStyled>
      </LayoutHeaderStyled>
      {children}
    </>
  );
}
