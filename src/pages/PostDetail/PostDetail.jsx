import { useEffect, useState } from 'react';
import BookmarkIcon from '../../components/Icons/BookmarkIcon';
import ChatIcon from '../../components/Icons/ChatIcon';
import EllipsisIcon from '../../components/Icons/EllipsisIcon';
import HeartIcon from '../../components/Icons/HeartIcon';
import CommentBox from '../../components/Popup/CommentBox';
import styles from './PostDetail.module.css';

function PostDetail() {
    const [isVisible, setIsVisible] = useState(false);
    const openCommentBox = (e) => {
        setIsVisible(true)
    };

    const closeCommentBox = (e) => {
        setIsVisible(false)
    };

    return (  
        <div className={styles['post-detail']}>

            <div className={styles['actions-sticky']}>
                <button><HeartIcon /> 12</button>
                <button onClick={openCommentBox}><ChatIcon/> 12</button>
            </div>
            {isVisible  &&  <CommentBox closeCommentBox={closeCommentBox} />} 


            <div className={styles['post-header']}>
                <h1 className={`${styles['post-title']} mt-0`}>Kakao Talk: giới thiệu về các tính năng nổi bật</h1>
                <div className={styles['post-author']}>
                    <div className={styles['author']}>
                        <span className='mb-1 d-block color-grey'>Published on 04 June 2024 </span>
                        <span className='d-flex align-items-center color-orange gap-1'><img src='/account.png' alt=''/>Lương Sơn Bá</span>
                    </div>
                    <div className={styles['actions']}>
                        <button><BookmarkIcon /></button>
                        <button><EllipsisIcon /></button>
                    </div>
                </div>
            </div>

            <div className={styles['post-content']}>


                <p>Kakao Talk là một trong những ứng dụng được sử dụng phổ biến tại Hàn Quốc. Vậy ứng dụng này có những tính năng gì?  Hãy cùng mình tìm hiểu chi tiết qua bài viết này nhé!</p>
                <h2>1. Kakao Talk là gì ?</h2>
                <ol>
                    <li>hoho</li>
                    <li>hehe</li>
                    <li>haha</li>
                    <li>huhu</li>
                </ol>

                <img alt='' src='/image9.png' />
                <span>t2fygekhdjk <a href=''>link</a></span>


            </div>


            <div className={styles['post-footer']}>
                <span>Tiếng Anh</span>
                <div className='d-flex gap-2 mt-1'>
                    <span className={`${styles['heart-count']} ${styles['count']}`}><HeartIcon /> 12</span>
                    <span className={`${styles['comment-count']} ${styles['count']}`}><ChatIcon /> 12</span>
                </div>
            </div>


        </div>
    );
}

export default PostDetail;