import FacebookIcon from "../Icons/FaceBookIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import AppleIcon from "../Icons/AppleIcon";
import LockIcon from "../Icons/LockIcon";
import MailIcon from "../Icons/MailIcon";
import styles from "./Popup.module.css"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
function LoginForm({closeFormLogin}) {
    const { login } = useContext(AuthContext); 
    const inputRef = useRef(null);
    function handleLogin(e) {
        e.preventDefault();
        login(inputRef.current.value)
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeFormLogin()
        }
    };


    return (  
        (
            <div onClick={handleOverlayClick} className={styles.overlay}>
                <div className={styles['form-wrapper']}>
                    <form className={` ${styles['login-form']} ${styles['popup-form']}`}>
                        <h1 className="text-center m-0 ">Đăng nhập</h1>

                        <div className={styles['form-group']}>
                            <label>Email</label>
                            <div className={styles['input-wrapper']}>
                                <MailIcon />
                                <input ref={inputRef} type="text" placeholder="Email" />
                            </div>
                        </div>

                        <div className={styles['form-group']}>
                            <label>Password</label>
                            <div className={styles['input-wrapper']}>
                                <LockIcon />
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <a href="" className={`${styles['forgot-password']} text-end d-block w-100`}>Forgot password</a>
                        <button onClick={handleLogin} className={`${styles['login-btn']} ${styles['submit-btn']} btn primary-btn`}>Log In</button>
                    </form>

                    <div className={styles['form-bottom']}>
                        <div className={styles['form-text']}><span className={styles['line']}></span>
                        <span>Or</span>
                        <span className={styles['line']}></span></div>
                        <div className={styles['social-section']}>
                            <a href="" className={styles['social-btn']}><GoogleIcon /></a>
                            <a href="" className={styles['social-btn']}><FacebookIcon /></a>
                            <a href="" className={styles['social-btn']}><AppleIcon /></a>
                        </div>
                        <p className="large-text">Don’t have an account? <a href="">Sign Up</a></p>
                    </div>
                </div>
            </div>
        )
    );
}

export default LoginForm;