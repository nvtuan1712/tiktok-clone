//Thư viện externor trước(thư viện bên ngoài)
import classNames from "classnames/bind";
import { useEffect } from "react";

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Following.module.scss'
import RecommendItem from "./RecommendItem";

const cx = classNames.bind(styles);

function Home() {

    useEffect(() => {
        document.title = 'Đang follow - Xem video từ những nhà sáng tạo mà bạn follow | TikTok'
    },[])

    return (
        <div className={cx('main-container')}>
            <div>
                <RecommendItem />
                <RecommendItem />
                <RecommendItem />
                <RecommendItem />
            </div>
        </div>
    );
}

export default Home;
