import styles from './SidebarDashBoard.module.scss'
import classNames from 'classnames/bind'
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons'
// import { useState } from 'react';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles)

function SidebarDashBoard({ className }) {
    return (
        <>
            <aside className={cx('container')}>
                <div className={cx('scroll-container', className)}>
                    <div className={cx('wrapper')}>
                        <Menu>
                            <MenuItem title='Quản lý tài khoản' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                            <MenuItem title='Quản lý người dùng' icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                            <MenuItem title='Quản lý video' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                            <MenuItem title='Quản lý âm nhạc' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                            <MenuItem title='Quản lý xu hướng' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                            <MenuItem title='Quản lý báo cáo thống kê' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                        </Menu>
                        <MenuItem className={cx('logout')} title='Đăng xuất' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SidebarDashBoard;