import Card from "../Card/Card";
import styles from "./RowCard.module.css"
function RowCard({title, courses = []} ) {

    return ( 
        <div className={styles["list-courses"]}>
            <h2>{title ?? "Bài viết nổi bật"}</h2>
            <div className={styles["courses"]}>
                {/* {(courses.length == 0) && <>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </>} */}

                {
                    courses.map((course) => (
                        <Card 
                            key={course.id}
                            {...course}

                            />
                    ))
                }
            </div>
        </div>
    );
}

export default RowCard;