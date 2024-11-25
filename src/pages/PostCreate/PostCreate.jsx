import { useState } from "react";
import styles from "./PostCreate.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function PostCreate() {
    const [content, setContent] = useState("Tiêu đề");
    
    const handleContentChange = (value) => {
        setContent(value); 
    };

    return (  
        <div className={styles["post-create"]}>
            <h1 dangerouslySetInnerHTML={{ __html: content }}></h1>
            <div className={styles["create-form"]}>
                <ReactQuill
                    className={styles['editor']}
                    value={content}
                    onChange={handleContentChange}
                    modules={{
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link'], 
                    ],
                    }}
                    theme="snow" 
                />
                <button className="btn primary-btn">Xuất bản</button>

            </div>

        </div>
    );
}

export default PostCreate;