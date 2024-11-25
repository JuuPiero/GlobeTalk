import SearchIcon from "../Icons/SearchIcon";
import BellIcon from "../Icons/BellIcon";
import NotificationBox from "../NotificationBox/NotificationBox";

import styles from "./Header.module.css"
import AccountBox from "../AccountBox/AccountBox";
import { useContext, useState } from "react";
import { Link } from "react-router";
import LoginForm from "../Popup/LoginForm";
import RegistryForm from "../Popup/RegistryForm";
import ForgotPasswordForm from "../Popup/ForgotPasswordForm";
import { AuthContext } from "../../context/AuthContext";
// import LoginForm from "../Popup/LoginForm";
function Header() {
    const [isNotifiBoxOpen, setNotifiBoxIsOpen] = useState(false);
    const [isAccountBoxOpen, setAccountBoxOpenIsOpen] = useState(false);
    const [isOpenFormLogin, setOpenFormLogin] = useState(false)
    const [isOpenFormRegistry, setOpenFormRegistry] = useState(false)

    function openFormLogin(e) {
        e.preventDefault();
        setOpenFormLogin(true)
    }
    function closeFormLogin() {
        setOpenFormLogin(false)
    }

    function openFormRegistry(e) {
        e.preventDefault();
        setOpenFormRegistry(true)
    }
    function closeFormRegistry() {
        setOpenFormRegistry(false)
    }

    const toggleNotification = () => {
        setNotifiBoxIsOpen(!isNotifiBoxOpen);
        setAccountBoxOpenIsOpen(false);
    };

    const toggleAccount = () => {
        setAccountBoxOpenIsOpen(!isAccountBoxOpen);
        setNotifiBoxIsOpen(false);
    };

    const { isLoggedIn } = useContext(AuthContext); 
    
    return ( 
        <header className={`${styles['page-header']} d-flex justify-space-between align-items-center`}>
            {/* <Link className="logo" to={App}></Link> */}
            <Link className={`${styles['logo']} d-flex justify-content-center align-items-center`} to="/">
                <img alt="" src="/logo1.png" />
                <img alt="" src="/logo2.png" />
            </Link>
            <form className={styles["search-form"]} action="" method="GET">
                <input type="text" placeholder="Tìm kiếm..." />
                <button className={styles["search-btn"]} type="submit">
                    <SearchIcon />
                </button>
            </form>
            <div className={styles["actions"]}>

                {
                    isLoggedIn ? (
                        <>
                            <button onClick={toggleNotification} className="notification-btn" ><BellIcon /></button>
                            <button onClick={toggleAccount} ><img alt="" src="/account.png" /></button>
                            {isNotifiBoxOpen && <NotificationBox  />}
                            {isAccountBoxOpen && <AccountBox />}

                        </>
                    ) :
                    (
                        <>
                            <a onClick={openFormRegistry} className="btn secondary-btn" href="#">đăng ký</a>
                            <a onClick={openFormLogin} className="btn primary-btn" href="#">đănh nhập</a>
                            {isOpenFormLogin && <LoginForm closeFormLogin={closeFormLogin}/>}
                            {isOpenFormRegistry && <RegistryForm closeFormRegistry={closeFormRegistry} />}
                        </>
                    )

                }
            </div>

        </header>
    );
}

export default Header;