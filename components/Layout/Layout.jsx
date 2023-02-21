import Link from 'next/link';
import {
    LayoutHeaderLogoStyled, LayoutHeaderNavLiStyled,
    LayoutHeaderNavStyled,
    LayoutHeaderNavUlStyled,
    LayoutHeaderStyled
} from '@/components/Layout/Layout.styles';


export default function Layout({children}) {
    return (
        <>
        <LayoutHeaderStyled>
            <LayoutHeaderLogoStyled>
                <Link href="/">
                    사달라
                </Link>
            </LayoutHeaderLogoStyled>
            <LayoutHeaderNavStyled>
                <LayoutHeaderNavUlStyled>
                    <LayoutHeaderNavLiStyled>
                        <Link href="/">
                            홈
                        </Link>
                    </LayoutHeaderNavLiStyled>
                    <LayoutHeaderNavLiStyled>
                        <Link href="/products">
                            문구
                        </Link>
                    </LayoutHeaderNavLiStyled>
                    <LayoutHeaderNavLiStyled>
                        <Link href="/">
                            커뮤니티
                        </Link>
                    </LayoutHeaderNavLiStyled>
                    <LayoutHeaderNavLiStyled>
                        <Link href="/">
                            마이페이지
                        </Link>
                    </LayoutHeaderNavLiStyled>
                </LayoutHeaderNavUlStyled>
            </LayoutHeaderNavStyled>
        </LayoutHeaderStyled>
        {children}
        </>
    );
}
