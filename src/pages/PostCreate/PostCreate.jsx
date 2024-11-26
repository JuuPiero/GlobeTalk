import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PostCreate.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from "../../context/AuthContext";
function PostCreate() {
    const [content, setContent] = useState("Tiêu đề");
    const [title, setTitle] = useState("Tiêu đề");
    // const [posts, setPosts] = useState([])

    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('posts');
        return savedPosts ? JSON.parse(savedPosts) : [];
    });
    const { username } = useContext(AuthContext); 
    const titleEl = useRef(null)
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem("posts"));
        if (storedPosts) {
            setPosts(storedPosts);
        }
    }, []);

    const handleContentChange = (value) => {
        setContent(value); 
    };

    useEffect(() => {
        const matchedTitle = content.match(/<[^>]+>(.*?)<\/[^>]+>/)?.[1] || title;
        titleEl.current.innerText = matchedTitle;
        setTitle(matchedTitle);
    }, [content]);

    function handleCreatePost(e) {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: titleEl.current.innerText,
            content: content.replace(titleEl.current.innerHTML, ''),
            author: username ?? "Default",
        }
        setPosts([...posts, newPost]);
        setContent('Tiêu đề')
    }
    useEffect(() => {
        // console.log(posts); // In ra giá trị mới của posts mỗi khi nó thay đổi
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    return (  
        <div className={styles["post-create"]}>
            <h1 ref={titleEl}>Tiêu đề</h1>
            <div className={styles["create-form"]}>
                <ReactQuill
                    className={styles['editor']}
                    value={content}
                    onChange={handleContentChange}
                    modules={{
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [
                            { list: 'ordered' }, 
                            { list: 'bullet' }],
                        ['link'], 
                        ['image'],
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    ],
                    }}
                    theme="snow" 
                />
                <button onClick={handleCreatePost} className="btn primary-btn">Xuất bản</button>

            </div>

        </div>
    );
}

export default PostCreate;