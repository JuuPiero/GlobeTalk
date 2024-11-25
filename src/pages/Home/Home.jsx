import styles from "./Home.module.css"
function Home() {
    return (
        <div className={styles['home-container']}>
            <h1 className={styles['page-title']}>Học tiếng Anh và tiếng trung Online
                <span className="h1 d-block">Nhanh chóng & hiệu quả</span>
            </h1>
            <section className={styles['page-section']}>
                <img alt="" src="/image1.png"/>
                <div className={`${styles['section-text']}  text-center` }>
                    <h2 className={styles['section-title']}>Học tập linh hoạt mọi lúc mọi nơi</h2>
                    <p>Khóa học online chất lượng cao với giáo trình bài bản,
                    phương pháp giảng dạy tương tác.</p>
                    <p>Học tập với giáo viên giàu kinh nghiệm, nhận chứng
                    chỉ sau khi hoàn thành khóa học.</p>
                    <p>Lộ trình học tập cá nhân hóa, phù hợp với mọi trình độ.</p>
                </div>
            </section>

            <section className={styles['page-section']}>
                <div className={`${styles['section-text']}  text-center` }>
                    <h2 className={styles['section-title']}>LỢI ÍCH KHI HỌC CÙNG GLOBE TALK</h2>
                    <p>Nâng cao kỹ năng nghe, nói, đọc, viết</p>
                    <p>Mở rộng cơ hội việc làm trong môi trường quốc tế.</p>
                    <p>Phát triển tư duy, tăng cường sự tự tin.</p>
                    <p>Kết nối với cộng đồng học viên toàn cầu.</p>
                </div>
                <img alt="" src="/image2.png"/>
            </section>

            <section className="p-1">
                <h2 className={`${styles['section-title']}  text-center` }>ĐA DẠNG CÁC KHÓA HỌC</h2>
                <div className={`${styles['cources-container']} d-flex justify-space-between`}>
                    <div className={styles['cource-item']}>
                        <h2 className={styles['cource-name']}>Tiếng Anh cơ bản</h2>
                        <a href="#" className={`${styles['start-cource']} btn primary-btn` }>Bắt đầu</a>
                    </div>
                    <div className={styles['cource-item']}>
                        <h2 className={styles['cource-name']}>Tiếng Anh nâng cao</h2>
                        <a href="#" className={`${styles['start-cource']} btn primary-btn ` }>Bắt đầu</a>
                    </div>
                    <div className={styles['cource-item']}>
                        <h2 className={styles['cource-name']}>Tiếng Anh cơ bản</h2>
                        <a href="#" className={`${styles['start-cource']} btn primary-btn` }>Bắt đầu</a>
                    </div>
                    <div className={styles['cource-item']}>
                        <h2 className={styles['cource-name']}>Tiếng Anh cơ bản</h2>
                        <a href="#" className={`${styles['start-cource']} btn primary-btn` }>Bắt đầu</a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;