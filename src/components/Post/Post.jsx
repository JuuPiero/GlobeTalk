
import { Link } from "react-router";
import styles from "./Post.module.css"
function Post({title, content, author, preview}) {
    return ( 
        <Link to="/post/detail/1" className={styles.post}>
            <div className={styles['post-left']}>
                <div className={styles['post-author']}>
                    <img alt="" src="/account.png" className={styles['author-avatar']}/>
                    <span>{author}</span>
                </div>
                <h2 className={styles['post-title']}>{title}</h2>
                <p className={styles['post-summary']}>{content}</p>
            </div>
            <div className={styles['post-right']}>
                <img alt="" src={preview ?? "/image6.png"}  className={styles['post-preview']}/>
            </div>
        </Link>
    );
}

export default Post;