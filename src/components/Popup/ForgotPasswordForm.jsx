import FacebookIcon from "../Icons/FaceBookIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import AppleIcon from "../Icons/AppleIcon";
import LockIcon from "../Icons/LockIcon";
import MailIcon from "../Icons/MailIcon";
import styles from "./Popup.module.css"
function ForgotPasswordForm() {
    return (  

        <div className={styles.overlay}>
            <div className={styles['form-wrapper']}>
                <form className={` ${styles['login-form']} ${styles['popup-form']}`}>
                    <h1 className="text-center m-0 ">Quên mật khẩu</h1>

                    <div className={styles['form-group']}>
                        <label>Email</label>
                        <div className={styles['input-wrapper']}>
                            <MailIcon />
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>

                    <div className={styles['form-group']}>
                        <label>Password</label>
                        <div className={styles['input-wrapper']}>
                            <LockIcon />
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <button className={`${styles['login-btn']} mt-1 d-block ${styles['submit-btn']} btn primary-btn`}>Reset Password</button>
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
                    <p className="large-text"><a href="">Sign in / </a><a href="">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;