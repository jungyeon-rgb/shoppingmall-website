import classes from "./main-navigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/" className={classes.logo}>
          사달라
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={classes.menu}>
              홈
            </Link>
            <Link href="/products" className={classes.menu}>
              문구
            </Link>
            <Link href="/" className={classes.menu}>
              커뮤니티
            </Link>
            <Link href="/" className={classes.menu}>
              마이페이지
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
