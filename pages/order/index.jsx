import styles from '@/styles/Order.module.css';

export default function Order() {
    return (
      <>
      <div className = {styles.topBox}>
        <div className = {styles.userName}>사용자 님</div>
        <div>
          <button className = {styles.logOut}>
            <a href = '/logout'>로그아웃</a>
          </button>
        </div>
      </div>
  
       <header className = {styles.header}>
        <div className = {styles.header}>
          <div className = {styles.logo}>
            <a href = '/'>logo</a>
          </div>
          <div className = {styles.wishList}>
            <a href = '/wishList'>/찜img/</a>
          </div>
          <div className = {styles.cart}>
            <a href = '/cart'>/장바구니img/</a>
          </div>
        </div>
       </header>
  
       <nav className = {styles.menu}>
          <ol>
            <li><a href = '/menu/1'>홈</a></li>
            <li><a href = '/menu/2'>문구</a></li>
            <li><a href = '/menu/3'>커뮤니티</a></li>
            <li><a href = '/menu/4'>마이페이지</a></li>
          </ol>
        </nav>
  
       <main className = {styles.main}>
        <article className = {styles.article}>
          <div className = {styles.item}>
            <div className = {styles.itemSideImg}>
              <img src='/img/order/1.jpg' alt='itemSideImg' 
              className = {styles.itemSideImgDetail} />
              <img src='/img/order/1.jpg' alt='itemSideImg' 
              className = {styles.itemSideImgDetail} />
              <img src='/img/order/1.jpg' alt='itemSideImg' 
              className = {styles.itemSideImgDetail} />
            </div>
            <div className = {styles.itemMainImg}>
            <img src='/img/order/1.jpg' alt='itemMainImg' 
              className = {styles.itemMainImgDetail} />
            </div>
          </div>
          <div className = {styles.order}>
            <div className = {styles.itemName}><h1>짱대박멋진상품</h1></div>
            <div className = {styles.price}><h3>3억</h3></div>
            <div className = {styles.itemCounter}>
              <button className = {styles.itemAdd}>+</button>
              <div className = {styles.itemCount}>0</div>
              <button className = {styles.itemSub}>-</button>
            </div>
            <div>
              <button className = {styles.addWishList}>찜 목록에 추가</button>
            </div>
            <div>
              <button className = {styles.addCart}>장바구니에 담기</button>
            </div>
          </div>
        </article>
  
        <nav>
          <div> 
             {/* 상담창은 3주차에 구현 */}
            <button className = {styles.helpCenter}>chat</button>
          </div>
          <div>
            <button className = {styles.top}>↑</button>
          </div>
        </nav>
       </main>
  
       <aside>
        <div className = {styles.bestItem}>
        <img src='/img/order/1.jpg' alt='bestItem' 
        className = {styles.bestItemImg} />
        <img src='/img/order/1.jpg' alt='bestItem' 
        className = {styles.bestItemImg} />
        <img src='/img/order/1.jpg' alt='bestItem' 
        className = {styles.bestItemImg} />
        </div>
       </aside>
  
       <footer>
        <p>대기업회사에서운영하는중</p>
       </footer>
      </>
    )
  }