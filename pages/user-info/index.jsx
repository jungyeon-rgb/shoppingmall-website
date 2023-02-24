import styles from '@/styles/userInfo.module.css';

export default function userInfo(){
    return (<>
    <main>
        <div className={styles.userInfo}>
            <div className={styles.renewInfo}>회원정보 수정</div>
            <div className={styles.userInfoView}>회원정보</div>
            <div className={styles.renewUserInfo}>
                <div className={styles.userName}>이름</div>
                <div className={styles.userPhone}>전화번호</div>
                <div className={styles.userAddress}>주소</div>
                <div className={styles.userEmail}>이메일</div>
            </div>
            {/*<div className={styles.}></div>*/}
        </div>
    </main>
    </>);
}