import { Link } from "react-router";
import styles from "./Card.module.css"

function Card({id, title, content, description, image} ) {
    return (  
        <div className={styles.card} >
            <Link to={"/course/detail/" + id} className={styles['card-header']} style={image ? { backgroundImage: `url(${image})` } : {}}>
                <h2 >{title ?? "Adverbial Clause"}</h2>
                <p className="large-text">{content ?? "Định nghĩa"}</p>
            </Link>

            <div className={styles['card-content']}>
                <p className="large-text">{description ?? "Mệnh Đề Trạng Ngữ"}</p>
            </div>

            <div className={styles['card-footer']}>
                <span>04 June</span>
                <span>5mins read</span>
            </div>
        </div>
    );
}

export default Card;