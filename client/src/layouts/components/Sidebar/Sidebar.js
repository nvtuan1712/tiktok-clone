import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'
import SuggestedAccounts from './SuggestedAccounts';
import FollowingAccounts from './FollowingAccounts';
import Discovery from './Discovery';
import Footer from './Footer';
import LoginSidebar from './LoginSidebar';

const cx = classNames.bind(styles)

function Sidebar() {
    const currentUser = false;

    return (
        <aside className={cx('container')}>
            <div className={cx('scroll-container')}>
                <div className={cx('wrapper')}>
                    <Menu>
                        <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                        <MenuItem title="Đang Follow" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                    </Menu>
                    <SuggestedAccounts label='Tài khoản được đề xuất'/>
                    {currentUser ? <FollowingAccounts/> : <LoginSidebar/>}
                    <Discovery label='Khám phá'/>
                    <Footer />
                </div>
                <div className={cx('scroll-bar')}>
                    <div className={cx('scroll-bar-thumb')}></div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;