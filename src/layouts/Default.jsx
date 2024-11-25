import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";


function Default() {
    return (
        <div className='page-wrapper'>
            <Header />

            <main className="page-main">
                <Sidebar />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Default;