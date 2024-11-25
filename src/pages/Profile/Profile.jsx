
import { useState } from "react";
import CommunityIcon from "../../components/Icons/CommunityIcon";
import SavePost from "../../components/SavePost/SavePost";
import styles from "./Profile.module.css"
function Profile() {
    const [userName, setUserName] = useState(() => {
        const userName = localStorage.getItem('username');
        return userName;
    })

    return ( 
        <div className={styles.profile}>
            <div className={styles['profile-header']}>
                <img className="profile-cover-photo" alt="" src="/profile.png" />
                <div className="d-flex align-items-end gap-1">
                    <img className="profile-avatar" alt="" src="/Avatar.png" />
                    <h1 className="profile-name">
                        {userName}
                    </h1>
                </div>
            </div>

            <div className={styles['profile-bottom']}>
                <div className="profile-bottom-left">
                    <div className={styles['profile-box']}>
                        <p className={`${styles['profile-box-title']} d-block large-text`}>Giới thiệu</p>
                        <span className="d-block"><CommunityIcon />Tham gia cộng đồng từ 2 tháng trước</span>
                    </div>

                    <div className={styles['profile-box']}>
                        <p className="d-block large-text profile-box-title">Hoạt động gần đây</p>
                        <span className="d-block">Chưa có hoạt động gần đây</span>
                    </div>
                </div>
                <div className={`${styles['profile-box']} profile-bottom-right`}>
                    <div className={`${styles['profile-box-title']} save-post-container`}>
                        <p className={`${styles['profile-box-title']} d-block large-text`}>Bài viết đã lưu</p>
                        <div className={styles['save-post-list']}>
                            <SavePost />

                            <SavePost />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;