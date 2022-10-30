//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack, PassIcon, PassIconShow } from '~/components/Icons';
import config from '~/config';
import axios from 'axios';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './LoginPhoneAndEmail.module.scss';

const cx = classNames.bind(styles);

function LoginPhoneAndEmail() {
    useEffect(() => {
        document.title = 'Đăng nhập | TikTok';
    }, []);

    return (
        <>
            <LoginContainer />
            <BackButton />
        </>
    );
}

function LoginContainer() {
    return (
        <div className={cx('container')}>
            <form>
                <div className={cx('title')}>Đăng nhập</div>
                <LoginByEmail />
            </form>
            <div className={cx('modal-content-footer')}>
                <div>Bạn không có tài khoản?</div>
                <Link to={config.routes.register}>
                    <span className={cx('link-text')}>Đăng ký</span>
                </Link>
            </div>
        </div>
    );
}

function LoginByEmail({ onClick }) {
    const [showPass, setShowPass] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [textErrorEmail, setTextErrorEmail] = useState('');
    const [showErrorPass, setShowErrorPass] = useState(false);
    const [textErrorPass, setTextErrorPass] = useState('');
    const inputPass = useRef();
    const inputEmail = useRef();

    const show = () => {
        setShowPass(!showPass);
        if (!showPass) {
            inputPass.current.type = 'text';
        } else {
            inputPass.current.type = 'password';
        }
    };

    const handleBlurEmail = () => {
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (inputEmail.current.value === '') {
            setShowErrorEmail(true);
            setTextErrorEmail('Email không được để trống!');
        } else if (!inputEmail.current.value.match(mailformat)) {
            setShowErrorEmail(true);
            setTextErrorEmail('Email sai định dạng!');
        } else {
            setShowErrorEmail(false);
            setShowErrorEmail('');
        }
    };

    const handleBlurPass = () => {
        var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (inputPass.current.value === '') {
            setShowErrorPass(true);
            setTextErrorPass('Mật khẩu không được để trống!');
        } else if (!inputPass.current.value.match(passformat)) {
            setShowErrorPass(true);
            setTextErrorPass('Mật khẩu phải có ít nhất 1 chữ số, 1 chữ cái thường, 1 chữ cái hoa và lớn hơn 8 ký tự!');
        } else {
            setShowErrorPass(false);
            setShowErrorPass('');
        }
    };

    const handleRemoveDis = () => {
        const smBtn = document.getElementById('submitBtn');
        if (inputEmail.current.value !== '' && inputPass.current.value !== '') {
            smBtn.removeAttribute('disabled');
        } else {
            smBtn.setAttribute('disabled', 'disabled');
        }
    };

    return (
        <>
            <div className={cx('des')}>Email</div>
            <div className={cx('div-container')}>
                <input
                    type="text"
                    placeholder="Email"
                    ref={inputEmail}
                    onBlur={handleBlurEmail}
                    onKeyUp={handleRemoveDis}
                />
            </div>
            {showErrorEmail && <span style={{ color: 'red', fontSize: '14px' }}>{textErrorEmail}</span>}
            <div className={cx('div-container')}>
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    ref={inputPass}
                    onBlur={handleBlurPass}
                    onKeyUp={handleRemoveDis}
                />
                <div className={cx('icon-container')} onClick={show}>
                    <div className={cx('pass-icon')}>{showPass ? <PassIconShow /> : <PassIcon />}</div>
                </div>
            </div>
            {showErrorPass && <span style={{ color: 'red', fontSize: '14px' }}>{textErrorPass}</span>}
            <SubmitInfo email1={inputEmail} password1={inputPass} />
        </>
    );
}

function SubmitInfo({ email1, password1 }) {
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            //lấy value trên form
            const email = email1.current.value;
            const password = password1.current.value;

            //gửi value từ form client đến server
            const respone = await axios.post('http://localhost:5000/login/phone-or-email', {
                email: email,
                password: password,
            });

            if (respone.status === 200) {
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button className={cx('style-button')} onClick={handleLogin} id="submitBtn" disabled>
            Đăng nhập
        </button>
    );
}

function BackButton() {
    const handleBackPage = () => {
        window.history.back();
    };

    return (
        <div className={cx('back-btn')} onClick={handleBackPage}>
            <ArrowBack />
            Quay lại
        </div>
    );
}

export default LoginPhoneAndEmail;
