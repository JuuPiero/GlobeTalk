import Post from "../../components/Post/Post";
import styles from "./Posts.module.css"

const posts = [
    {
        id: 1,
        title: "Kakao Talk: giới thiệu về các tính năng nổibật",
        content: "Rất nhiều bạn nói với tôi rằng uồi sao bạn biết nhiều từ vựng thế. Vậy nên hôm nay tôi sẽ chia sẽ cách mà tôi đã học được 100...",
        author: "Lương Sơn Bá"
    },

    {
        id: 2,
        title: "Học tiếng Trung Quốc qua hình ảnh cùng Globe Talk",
        content: "Làm thế nào để thuộc từ vựng và các mẫu câu tiếng Trung một cách nhanh chóng là câu hỏi của rất nhiều bạn đã và đang...",
        author: "Nguyễn Trọng Ninh"
    },
    {
        id: 3,
        title: "Podcast tiếng Anh giúp nâng cao khả năng nghe",
        content: "Dành thời gian nghe Podcast là một trong những cách hoàn hảo để giúp bạn học hỏi thêm nhiều điều mới và năng suất làm việc...",
        author: "Phạm Trung Tính"
    },

    {
        id: 4,
        title: "Chúc mừng sinh nhật bằng tiếng Trung như nào?",
        content: "Trong đời người ngày sinh nhật là vô cùng thiêng liêng, vào ngày này mà được những người yêu thương quan tâm mình gửi đến ...",
        author: "Trần Phú Quốc"
    }
]

function Posts() {
    const t = [1, 2, 3]
    return (  
        <div className={styles.posts}>
            <h1 className="page-title ">BÀI VIẾT NỔI BẬT</h1>
            <span className="d-block large-text pb-2">TỔNG HỢP CÁC BÀI VIẾT</span>

            <div className="list-posts">
                {
                    posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))
                }
            </div>

            <div className="pagination-menu text-center">
                <img alt="" src="/pagination.png"/>
            </div>
        </div>
    );
}

export default Posts;