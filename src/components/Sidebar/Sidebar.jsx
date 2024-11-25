import { Link } from "react-router";
import HomeIcon from "../Icons/HomeIcon";
import BookOpenIcon from "../Icons/BookOpenICon";
import HeartFileIcon from "../Icons/HeartFileIcon";
import styles from "./Sidebar.module.css"

const menus = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: HomeIcon
    },
    {
        id: 2,
        name: 'Courses',
        path: "/courses",
        icon: BookOpenIcon
    },
    {
        id: 3,
        name: "Blogs",
        path: "/blogs",
        icon: HeartFileIcon
    }
]

function Sidebar() {
    return ( 
        <aside className={styles.sidebar}>
            <ul className={styles['main-menu']}>
                <li>
                    <Link className={styles['menu-item']} to="/">
                        <HomeIcon />
                        <span className="large-text">Trang chủ</span>
                    </Link>
                </li>
                <li>
                    <Link className={styles['menu-item']} to="/cources">
                        <BookOpenIcon />
                        <span className="large-text">Khóa học</span>
                    </Link>
                </li>
                <li>
                    <Link className={styles['menu-item']} to="/posts">
                        <HeartFileIcon />
                        <span className="large-text">Bài viết</span>
                    </Link>
                </li>

                {/* {
                    menus.map(menu => (
                        <li key={menu.id}>
                            <Link className="menu-item" to={menu.path}>
                                {menu.icon()}
                                <span className="large-text">{menu.name}</span>
                            </Link>
                        </li>
                    ))
                } */}
            </ul>
        </aside>
    );
}

export default Sidebar;