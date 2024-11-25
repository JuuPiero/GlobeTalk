import { Link } from "react-router";
import styles from "./MyPost.module.css"
function MyPost() {
    return (  
        <div className={styles.mypost}>
            <h1 className="page-title">Bài viết của tôi</h1>
            <div className={styles.tabs}>
                <span className={`${styles.tab} h2 selected`}>Bài viết</span>
                <span className={`${styles.tab} h2 `}>Đã xuất bản</span>
            </div>
            <div className={styles['mypost-content']}>
                <p>Chưa có bản nháp nào</p>
                <p>Bạn có thể <Link to="/">viết bài viết mới</Link> hoặc <Link>đọc bài viết khác</Link></p>
            </div>
        </div>
    );
}

export default MyPost;