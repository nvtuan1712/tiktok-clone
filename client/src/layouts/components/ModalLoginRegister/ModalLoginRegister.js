//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

//Thư viện internor sau(thư viên bên trong dự án)
import { CloseModal } from '~/components/Icons';
import Login from '../Login';
import Register from '../Register';
import styles from './ModalLoginRegister.module.scss';

const cx = classNames.bind(styles);

function ModalLoginRegister({ children, onClick }) {
    const modal = useRef();

    const [swap, setSwap] = useState(true)

    const swapLogin = () => {
        setSwap(true)
    }

    const swapRegister = () => {
        setSwap(false)
    }

    return (
        <div className={cx('modal-container')} ref={modal}>
            <div className={cx('modal-mask')}></div>
            <div className={cx('modal-content-container')}>
                <div className={cx('modal-content')}>
                    {swap ? <Login onClick={swapRegister}/> : <Register onClick={swapLogin}/>}
                </div>
                <div className={cx('close-modal')} onClick={onClick}>
                    <CloseModal className={cx('btn-close-modal')} />
                </div>
            </div>
        </div>
    );
}

export default ModalLoginRegister;
