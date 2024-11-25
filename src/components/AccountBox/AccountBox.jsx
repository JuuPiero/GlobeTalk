import { Link } from "react-router";
import styles from "./AccountBox.module.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function AccountBox() {
    const { logout } = useContext(AuthContext)
    const [userName, setUserName] = useState(() => {
        const userName = localStorage.getItem('username');
        return userName;
    })

    function handleLogout(e) {
        e.preventDefault();
        logout()
    }

    return (  
        <div className={`${styles['account-box']} popup-box`}>
            <div className={styles['account-box-top']}>
                <img src="/account.png"  alt=""/>
                <div className={styles['text']}>
                    <span className="h2">{userName}</span>
                    <span className="color-grey">@{userName}</span>
                </div>

            </div>
            
            <div className={styles["account-actions"]}>
                <Link to="/profile">Trang cá nhân</Link>
                <Link to='/create/post'>Viết blog</Link>
                <Link to="/mypost">Bài viết của tôi</Link>
                <a onClick={handleLogout} href="#">Đăng xuất</a>
            </div>
        </div>
    );
}

export default AccountBox;