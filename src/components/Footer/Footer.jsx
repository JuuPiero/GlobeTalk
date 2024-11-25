import "./Footer.css"
function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-col ">
                <a href="#" className="logo"><img alt="" src="/logo3.png"/>
                <img alt="" src="/logo4.png"/></a>
                <p className="m-0 flex-1">© GlobeTalk 2024</p>
            </div>

           

            <div className="footer-col">
                <strong>VỀ GLOBETALK</strong>
                <a href="#">Giới thiệu</a>
                <a href="#">Liên hệ</a>
                <a href="#">Điều khoản</a>
                <a href="#">Bảo mật</a>
            </div>


            <div className="footer-col">
                <strong>Tài nguyên</strong>
                <a href="#">Cộng đồng</a>
                <a href="#">Phản hồi</a>
                <a href="#">Hướng dẫn sử dụng</a>
            </div>


            
            <div className="footer-col">
                <strong>Ứng dựng mobile</strong>
                <a href="#">
                    <img alt="" src="/image3.png"/>
                </a>
                <a href="#">
                    <img alt="" src="/image4.png"/>
                </a>
            </div>


        </footer>
    );
}

export default Footer;