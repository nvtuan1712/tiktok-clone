//Thư viện externor trước(thư viện bên ngoài)
import classNames from "classnames/bind";
import { useEffect } from "react";

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Home.module.scss'
import RecommendItem from "./RecommendItem";

const cx = classNames.bind(styles);

function Home() {

    

    useEffect(() => {
        document.title = 'Xem các video thịnh hành dành cho bạn | TikTok'
    },[])

    return (
        <div className={cx('main-container')}>
            <div>
                <RecommendItem />
                <RecommendItem />
            </div>
        </div>
    );
}

export default Home;
