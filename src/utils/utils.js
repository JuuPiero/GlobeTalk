const coursesEn = {
    title: 'Bài giảng tiếng Anh',
    courses : [
        {
            id: 1,
            title: "Adverbial Clause",
            content: "định nghĩa",
            description: "Mệnh Đề Trạng Ngữ",
        },
        {
            id: 2,
            title: "Time Adverbs",
            content: "cách sử dụng",
            description: "Trạng Từ Chỉ Thời Gian",
        },
        {
            id: 3,
            title: "Present Simple",
            content: "công thức",
            description: "Thì Hiện Tại Đơn",
        },
        {
            id: 4,
            title: "Present Simple",
            content: "công thức",
            description: "Thì Quá Khứ Đơn",
        }
    ]
}


const coursesCn = {
    title: 'Bài giảng tiếng Trung',
    courses : [
        {
            id: 1,
            title: "Thanh Điệu",
            content: "quy tắc cần nhớ",
            description: "Thanh Điệu Trong Tiếng Trung",
        },
        {
            id: 2,
            title: "Thanh Mẫu",
            content: "quy tăc cần nhớ",
            description: "Thanh Mẫu Trong Tiếng Trung",
        },
        {
            id: 3,
            title: "Vận Mẫu",
            content: "quy tăc cần nhớ",
            description: "Vận Mẫu Trong TIếng Trung",
        },
    ]
}

const featuredArticles = {
    title: 'Bài viết nổi bật',
    courses : [
        {
            id: 1,
            title: "Học Tiếng Trung",
            content: "qua hình ảnh",
            description: "Học Tiếng Trung Qua Hình Ảnh",
            image: "/image7.png"

        },
        {
            id: 2,
            title: "Kakao Talk",
            content: "cách sử dụng",
            description: "Kakao Talk: Tính Năng Nổi Bật",
            image: "/image8.png"
            
        },
        {
            id: 3,
            title: "Happy Birthday",
            content: "wishes",
            description: "Chúc Mừng Sinh Nhật Tiếng Trung",
            image: "/image10.png"

        },

        {
            id: 4,
            title: "Podcast",
            content: "học tiếng Anh",
            description: "Podcast Nâng Cao Khả Năng Nghe",
            image: "/image11.png"

        },
    ]
}


const posts = [
    {
        id: 1,
        title: "Kakao Talk: giới thiệu về các tính năng nổi bật",
        content: "Rất nhiều bạn nói với tôi rằng uồi sao bạn biết nhiều từ vựng thế. Vậy nên hôm nay tôi sẽ chia sẽ cách mà tôi đã học được 100...",
        author: "Lương Sơn Bá"
    },

    {
        id: 2,
        title: "Học tiếng Trung Quốc qua hình ảnh cùng Globe Talk",
        content: "Làm thế nào để thuộc từ vựng và các mẫu câu tiếng Trung một cách nhanh chóng là câu hỏi của rất nhiều bạn đã và đang...",
        author: "Nguyễn Trọng Ninh"
    },
    {
        id: 3,
        title: "Podcast tiếng Anh giúp nâng cao khả năng nghe",
        content: "Dành thời gian nghe Podcast là một trong những cách hoàn hảo để giúp bạn học hỏi thêm nhiều điều mới và năng suất làm việc...",
        author: "Phạm Trung Tính"
    },

    {
        id: 4,
        title: "Chúc mừng sinh nhật bằng tiếng Trung như nào?",
        content: "Trong đời người ngày sinh nhật là vô cùng thiêng liêng, vào ngày này mà được những người yêu thương quan tâm mình gửi đến ...",
        author: "Trần Phú Quốc"
    }
]



export {
    coursesEn,
    coursesCn,
    featuredArticles,
    posts
}