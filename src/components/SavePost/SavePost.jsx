import styles from "./SavePost.module.css"
function SavePost() {
    return (  
        <div className={styles['save-post']}>
            <div className={styles['save-post-left']}>
                <h2 className="m-0 color-white text-center">Adverbial Clause</h2>
                <span className="text-center d-block">định nghĩa</span>
            </div>

            <div className={styles['save-post-right']}>
                <span className={styles['save-post-title']}>Mệnh đề trạng ngữ</span>
                <p className={styles['save-post-summary']}>Mệnh đề trạng ngữ trong tiếng Anh (Adverbial Clause) là một chủ điểm ngữ pháp thường xuyên xuất hiện trong quá trình giao tiếp hàng ngày...</p>
            </div>
        </div>
    );
}

export default SavePost;