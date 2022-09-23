//
import classNames from "classnames/bind";
import styles from './LoginSidebar.module.scss'

//
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function LoginSideBar() {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button primary className={cx('btn-sidebar-login')}>Đăng nhập</Button>
        </div>
     );
}

export default LoginSideBar;