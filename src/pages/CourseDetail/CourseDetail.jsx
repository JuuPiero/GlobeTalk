import { useParams } from "react-router"
import styles from "./CourseDetail.module.css"
import RowCard from "../../components/RowCard/RowCard";

const courses = [
    {
        id: 1,
        title: "Học tiếng Trung",
        type: "qua hình ảnh",
        description: "Học Tiếng Trung Qua Hình Ảnh",
        image: "/image7.png"
    },

    {
        id: 2,
        title: "Học tiếng Trung",
        type: "qua hình ảnh",
        description: "Học Tiếng Trung Qua Hình Ảnh",
        image: "/image8.png"
    },

    {
        id: 3,
        title: "Học tiếng Trung",
        type: "qua hình ảnh",
        description: "Học Tiếng Trung Qua Hình Ảnh",
        image: "/image8.png"
    }
] 


function CourseDetail() {
    const { id } = useParams(); 
    return ( 
        <div className={styles['course-detail-wrapper']}>
            <div className={styles['course-banner']}>
                <div className={styles['course-banner-content']}>
                    <h1>Trạng từ chỉ thời gian (Adverb of time) trong tiếng Anh</h1>
                    <p className="large-text">Trạng từ chỉ thời gian hay Adverbs of time là gì? Phân loại và cách dùng cụ thể ra sao? Cùng GlobeTalk tìm hiểu ngay trong bài viết này!</p>
                </div>
            </div>

            <div className={styles["course"]}>
                <div className={styles['course-content']}>

                
                    <p>Cùng GlobeTalk khám phá ngay những kiến thức bổ ích về trạng từ chỉ thời gian, giúp bạn chinh phục tiếng Anh một cách hiệu quả nhất!</p>
                    <h2>1. Trạng từ chỉ thời gian là gì?</h2>
                    <p>Trong tiếng Anh, trạng từ chỉ thời gian (adverb of time) là những từ hoặc cụm từ dùng để mô tả khi nào, bao lâu, hoặc tần suất diễn ra của một hành động, sự việc, sự kiện hoặc trạng thái. Chúng đóng vai trò quan trọng trong việc làm cho câu văn trở nên rõ ràng và mạch lạc hơn, giúp người đọc, người nghe hiểu rõ thời điểm một sự việc xảy ra (có thể là quá khứ, hiện tại hoặc tương lai). 
                    Trạng từ chỉ thời gian thường trả lời cho các câu hỏi “When” (Khi nào), “How long” (Bao lâu) hoặc “How often” (Bao nhiêu lần).
                    </p>
                    <p>Ví dụ</p>
                    <ul>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>
                    </ul>

                    <ol>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>
                        <li>I went to school yesterday. (Hôm qua tôi đã đến trường.)</li>

                    </ol>

                    <img alt='' src='/image9.png' />


                </div>




                <div className={styles['course-footer']}>
                    <div className={styles['author']}>
                        <span>Published on 15 June 2024 </span>
                        <a><img alt="" src="/account.png" />Admin</a>
                    </div>
                    <div className={styles['actions']}>
                        <p>Chia sẻ bài viết</p>
                        <div className={styles['socials']}>
                            <a href=""><img alt="" src="/fb.png"/></a>
                            <a href=""><img alt="" src="/ins.png"/></a>
                            <a href=""><img alt="" src="/LinkedIn.png"/></a>
                        </div>
                    </div>
                </div>

                <RowCard {...{title: "Bài viết nổi bật", courses}} />
            </div>
           
        </div>
    );
}

export default CourseDetail;