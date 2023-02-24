import styles from '@/styles/myPage.module.css';
import Link from 'next/link';
import React from 'react';

export default function myPage(){
    return (<>
    <main className={styles.backgroun}>
    <aside>
        <div className={styles.myPageMenu}>
            <div className={styles.cart}>
                <button className={styles.cartBtn}>
                    <Link href = '/myPage'>장바구니</Link>
                </button>
            </div>
            <div className={styles.wishList}>
                <button className={styles.wishListBtn}>
                    <Link href = '/wishList'>찜 목록</Link>
                </button>
            </div>
            <div className={styles.userInfo}>
                <button className={styles.userInfoBtn}>
                    <Link href = '/userInfo'>정보 수정</Link>
                </button>
            </div>
        </div>
    </aside>
    <article>
        <div className={styles.myOrderList}>
        <div className={styles.myOrder}>
            <div>
                <a href='/'><img className={styles.productImg} src='/img/order/1.jpg' alt='itemSideImg' /></a>
            </div>
            <ul className={styles.orderList}>
                <li><div className={styles.productName}>사고싶은상품은사고말겠어</div></li>
                <li><div className={styles.productEa}>
                    <button className = {styles.itemAdd}>+</button>
                    <div className = {styles.itemCount}>0</div>
                    <button className = {styles.itemSub}>-</button>
                    </div></li>
                <li><div className={styles.productPrice}>12,456 원</div></li>
                <li><button className={styles.productDel}>삭제</button></li>
            </ul>
        </div>
        </div>
        <div className={styles.finOrder}>
            <div className={styles.totalProduct}>5개</div>
            <div className={styles.totalPrice}>52,555원</div>
            <div className={styles.totalOrder}>
                <button>주문하기</button>
            </div>
        </div>
    <Counter></Counter>
    </article>
    </main>

    </>);
}

function Counter({value}){
    let countState = React.useState(0);
    let count = countState[0];
    let setCount = countState[1];
    function up(){
        setCount (count+1);
        console.log(setCount);
    }
    function down(){
        setCount(count-1);
    }
    return <>
    <button onClick={up}>+</button>
    {count}
    <button onClick={down}>-</button>
    </>;
}