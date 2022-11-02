//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
// import { useRef } from 'react';
import Button from '~/components/Button';
import { MoreAction, ShareProfile, EditProfile } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '../Profile.module.scss';
import MenuMoreActions from './MenuMoreActions';
import MenuShareProfile from './MenuShareProfile';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProfileHeader({ user }) {
    const [currentUser, setCurrentUser] = useState(true)
    const idAccount = localStorage.getItem('idAccount')

    useEffect(() => {
        document.title = `${user.data.nickname} (@${user.data.nickname}) TikTok | Xem các video mới nhất của ${user.data.nickname}`
    }, [user.data.nickname])

    useEffect(() => {
        if(user.data.account !== idAccount) {
            setCurrentUser(false)
        }
    },[idAccount, user.data.account])

    return (
        <div className={cx('profile-content-header')}>
            <div className={cx('profile-info')}>
                <div className={cx('avatar-container')}>
                    <span shape="circle" className={cx('span-avatar-container')}>
                        <img
                            loading="lazy"
                            alt=""
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4a7cd775e9232698e132c2206f9ad2de~c5_100x100.jpeg?x-expires=1664370000&amp;x-signature=V9rwgsuVRAUBKGLewv4HZ5E6iF8%3D"
                            className={cx('avatar-img')}
                        />
                    </span>
                </div>
                <div className={cx('title-container')}>
                    <div className={cx('title-profile')}>{user.data.nickname}</div>
                    <h1 className={cx('title-sub')}>{user.data.nickname}</h1>
                    {currentUser ? (
                        <div className={cx('edit-container')}>
                            <Button text className={cx('btn-edit')}>
                                <span>
                                    <EditProfile className={cx('edit-profile-icon')}/>
                                    <span>Sửa hồ sơ</span>
                                </span>
                            </Button>
                        </div>
                    ) : (
                        <div className={cx('follow-container')}>
                            <div className={cx('follow-btn-wrapper')}>
                                <Button primary className={cx('follow-btn')}>
                                    Follow
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <h2 className={cx('count-info')}>
                <div className={cx('count-number')}>
                    <strong title="Đang Follow">{user.data.following_count}</strong>
                    <span className={cx('span-unit')}>Đang Follow</span>
                </div>
                <div className={cx('count-number')}>
                    <strong title="Follower">{user.data.follower_count}</strong>
                    <span className={cx('span-unit')}>Follower</span>
                </div>
                <div className={cx('count-number')}>
                    <strong title="Thích">{user.data.heart_count}</strong>
                    <span className={cx('span-unit')}>Thích</span>
                </div>
            </h2>
            {user.data.description === '' ? <h2 className={cx('desc')}>Chưa có tiểu sử.</h2> : <h2 className={cx('desc')}>{user.data.description}</h2>}
            <MenuShareProfile>
                <div className={cx('share-actions')}>
                    <ShareProfile />
                </div>
            </MenuShareProfile>
            {currentUser ? (
                <></>
            ) : (
                <MenuMoreActions>
                    <div className={cx('more-actions')}>
                        <MoreAction />
                    </div>
                </MenuMoreActions>
            )}
        </div>
    );
}

export default ProfileHeader;
