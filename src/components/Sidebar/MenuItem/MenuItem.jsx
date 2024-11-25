import { Link } from "react-router";
import "./MenuItem.css"
function MenuItem(menu) {
    return (
        <li>
            <Link className="menu-item" to={menu.path}>
                {menu.icon()}
                <span className="large-text">{menu.name}</span>
            </Link>
        </li>
    );
}

export default MenuItem;