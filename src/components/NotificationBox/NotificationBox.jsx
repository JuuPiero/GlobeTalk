import styles from "./NotificationBox.module.css"
function NotificationBox() {

    
    return (  
        <div className={`${styles['notification-box']} popup-box`}>
            <div className={`${styles['notification-box-top']}`}>
                <h2 className="m-0">Thông báo</h2>
                <a href="#">Đánh dấu đã đọc</a>
            </div>
            <div className={`${styles['list-notifications']}`}>
                <div className={`${styles['notification-item']}`}>
                    <img src="/image5.png" alt="" />
                    <div className={`${styles['text']}`}>
                        <p >Bài học <span>Thì Quá Khứ Đơn</span> mới được
                        thêm vào</p>
                        <span >2 tháng trước</span>
                    </div>
                </div>

                <div className={`${styles['notification-item']}`}>
                    <img src="/image5.png" alt="" />
                    <div className={`${styles['text']}`}>
                        <p>Bài học <span>Thanh Mẫu Trong Tiếng Trung</span> mới được thêm vào</p>
                        <span >2 tháng trước</span>
                    </div>
                </div>


                <div className={`${styles['notification-item']}`}>
                    <img src="/image5.png" alt="" />
                    <div className={`${styles['text']}`}>
                        <p >Bài học <span>Thì Quá Khứ Đơn</span> mới được
                        thêm vào</p>
                        <span >3 tháng trước</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NotificationBox;