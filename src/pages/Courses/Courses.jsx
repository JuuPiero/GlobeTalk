import Banner from "../../components/Banner/Banner";

import RowCard from "../../components/RowCard/RowCard";

import styles from "./Courses.module.css"

import {coursesEn, coursesCn, featuredArticles} from '../../utils/utils'



// const courses = [
//     {
//         id: 1,
//         title: "Học tiếng Trung",
//         content: "qua hình ảnh",
//         description: "Học Tiếng Trung Qua Hình Ảnh",
//         image: "/image7.png"
//     },

//     {
//         id: 2,
//         title: "Học tiếng Trung",
//         content: "qua hình ảnh",
//         description: "Học Tiếng Trung Qua Hình Ảnh",
//         image: "/image8.png"
//     },

//     {
//         id: 3,
//         title: "Học tiếng Trung",
//         content: "qua hình ảnh",
//         description: "Học Tiếng Trung Qua Hình Ảnh",
//         image: "/image8.png"
//     }
// ] 

function Courses () {


    return (
        <div className={styles["courses-container"]}>
            <Banner />
            <div className={styles["courses-wrapper"]}>

                <RowCard {...{title: coursesEn.title, courses: coursesEn.courses}} />

                <RowCard {...{title: coursesCn.title, courses: coursesCn.courses}} />
                <RowCard {...{title: featuredArticles.title, courses: featuredArticles.courses}} />

                {/* <RowCard {...{title : "Bài giảng tiếng Trung", courses: courses0}}/> */}
                {/* <RowCard {...{title : "Bài viết nổi bật", courses}}/> */}
                
            </div>
        </div>
    );
}

export default Courses
