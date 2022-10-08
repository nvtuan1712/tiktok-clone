//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { User } from '~/components/Icons';

//Thư viện internor sau(thư viên bên trong dự án)
import styles from '~/layouts/components/ModalLoginRegister/ModalLoginRegister.module.scss'


const cx = classNames.bind(styles);

const arrLoginItem = [
    {
        icon: <User/>,
        text: 'Số điện thoại / Email / TikTok ID',
        to: ''
    },
]

function RegisterItemLink({ className }) {
    const renderItem = arrLoginItem.map((item, index) => {
        return (
            <Link key={index} className={className} to={item.to}>
                <div className={cx('box-container')}>
                    <div className={cx('icon-cotainer')}>{item.icon}</div>
                    {item.text}
                </div>
            </Link>
        );
    });

    return (
        <>
            {renderItem}
        </>
    );
}

export default RegisterItemLink;