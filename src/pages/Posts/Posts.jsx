import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import styles from "./Posts.module.css"
import {posts as defaultPosts} from "../../utils/utils"


function Posts() {
    const [posts, setPosts] = useState(defaultPosts)
    
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem("posts"));
        if (storedPosts) {
            setPosts(storedPosts);
        }
    }, []);
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