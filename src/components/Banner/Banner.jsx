import styles from "./Banner.module.css";
import ArrowLeft from  "../Icons/ArrowLeft";
import ArrowRight from  "../Icons/ArrowRight";

function Banner() {
    return (  
        <div className={styles['banner-wrapper']}>
            <div className={styles['banner-content']}>
                <h1 className={styles["banner-title"]}>Khóa học chất lượng</h1>
                <p>Từ cơ bản đến nâng cao giúp học viên phát triển kỹ năng ngôn ngữ một cách hiệu quả và toàn diện.</p>
                <a href="" className={`${styles["join-btn"]} btn `}>Tham gia ngay</a>
            </div>
            <div className={styles['banner-controls']}>
                <button className={styles['control']}><ArrowLeft/> </button>
                <button className={styles['control']}><ArrowRight/> </button>
            </div>
        </div>
    );
}

export default Banner;