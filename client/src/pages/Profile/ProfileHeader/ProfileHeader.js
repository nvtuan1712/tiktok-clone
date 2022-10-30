//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
// import { useRef } from 'react';
import Button from '~/components/Button';
import { MoreAction, ShareProfile, EditProfile } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '../Profile.module.scss';
import MenuMoreActions from './MenuMoreActions';
import MenuShareProfile from './MenuShareProfile';

const cx = classNames.bind(styles);

function ProfileHeader() {
    const currentUser = true;

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
                    <div className={cx('title-profile')}>Ig.nvy</div>
                    <h1 className={cx('title-sub')}>beososweet</h1>
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
                    <strong title="Đang Follow">101</strong>
                    <span className={cx('span-unit')}>Đang Follow</span>
                </div>
                <div className={cx('count-number')}>
                    <strong title="Follower">6964</strong>
                    <span className={cx('span-unit')}>Follower</span>
                </div>
                <div className={cx('count-number')}>
                    <strong title="Thích">230.4k</strong>
                    <span className={cx('span-unit')}>Thích</span>
                </div>
            </h2>
            <h2 className={cx('desc')}>🐥</h2>
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
