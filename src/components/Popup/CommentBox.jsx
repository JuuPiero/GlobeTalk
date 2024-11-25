import { useEffect, useState } from 'react';
import styles from './Popup.module.css';
function CommentBox({closeCommentBox}) {


    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            // setIsVisible(false);
            closeCommentBox()
            // isVisible = false
        }
    };

    return (  
        (
            <div onClick={handleOverlayClick} className={styles.overlay}>
                <div className={styles['comment-box']}>
                    <div className={styles['comment-box-header']}>
                        <img alt='' src='/account.png' />
                        <input type='text' placeholder='Nhập bình luận của bạn' />
                    </div>

                    <div className={styles['comment-box-content']}>
                        <span className={styles['comment-count']}>3 bình luận</span>
                        <div className={styles['list-comments']}>
                            <div className={styles['comment-item']}>
                                <div className={styles['comment-item-top']}>
                                    <img alt='' src='/account.png' />
                                    <span className='color-orange'>Đức Mạnh Trần</span>
                                    <span className='color-grey'>1 tháng trước</span>
                                </div>
                                <p className='medium-text'>Cảm ơn anh vì đã chia sẻ ^^</p>
                            </div>

                            <div className={styles['comment-item']}>
                                <div className={styles['comment-item-top']}>
                                    <img alt='' src='/account.png' />
                                    <span className='color-orange'>Đức Mạnh Trần</span>
                                    <span className='color-grey'>1 tháng trước</span>
                                </div>
                                <p className='medium-text'>Cảm ơn anh vì đã chia sẻ ^^</p>
                            </div>


                            <div className={styles['comment-item']}>
                                <div className={styles['comment-item-top']}>
                                    <img alt='' src='/account.png' />
                                    <span className='color-orange'>Đức Mạnh Trần</span>
                                    <span className='color-grey'>1 tháng trước</span>
                                </div>
                                <p className='medium-text'>Cảm ơn anh vì đã chia sẻ ^^</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default CommentBox;