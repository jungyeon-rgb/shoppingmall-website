import classes from "./main-navigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">홈</Link>
            <Link href="/products">문구</Link>
            <Link href="/">커뮤니티</Link>
            <Link href="/">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
