//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//Thư viện internor sau(thư viện bên trong dự án)
import { LoginItemDiv, LoginItemLink } from './LoginItem';
import styles from '../ModalLoginRegister/ModalLoginRegister.module.scss';

const cx = classNames.bind(styles);

function Login({ onClick }) {
    return (
            <>
                <div className={cx('modal-content-wrapper')}>
                    <div className={cx('login-container')}>
                        <div className={cx('login-title')}>Đăng nhập vào TikTok</div>
                        <LoginItemLink className={cx('login-link')} />
                        <LoginItemDiv className={cx('box-container')} />
                    </div>
                </div>
                <div className={cx('modal-content-footer')}>
                    <div>Bạn không có tài khoản?</div>
                    <Link to={'/'} onClick={onClick}>
                        <span className={cx('link-text')}>Đăng ký</span>
                    </Link>
                </div>
            </>
    );
}

export default Login;
