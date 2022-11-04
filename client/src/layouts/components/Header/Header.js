import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faGlobe,
    faUser,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Menu from '~/components/Popper/Menu/Menu';
import { InboxIcon, MessageIcon, UploadIcon, Add } from '~/components/Icons/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { useState, useEffect } from 'react';
// import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'Ngôn ngữ',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
        show: true
    },
];

function Header({ className, children }) {
    const [current, setCurrent] = useState(false)
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        if(accessToken) {
            setCurrent(true)
        }
    },[accessToken])


    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle language change
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: `/${localStorage.getItem('nickName')}`,
            isUser: true
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner', className)}>
                {/* Logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* Search */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    {current ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload video" placement="bottom" offset={[0, 0]}>
                                <Link to={config.routes.upload}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to={config.routes.upload} className={cx('link-text')}>
                                <div className={cx('upload')}>
                                    <Add className={cx('upload-icon')} />
                                    <span className={cx('upload-text')}>Tải lên</span>
                                </div>
                            </Link>
                            <Button primary className={cx('btn-login')}>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={ current === false ? userMenu : MENU_ITEMS } setState={setCurrent} state={current} onChange={handleMenuChange}>
                        {current ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Avatar User"
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be~c5_300x300.webp?x-expires=1662631200&x-signature=hT2Evz9bo1GouXeqNKyQreAbV98%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
