//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
// import { useRef } from 'react';
import Button from '~/components/Button';
import { MoreAction, ShareProfile, EditProfile } from '~/components/Icons';
import axios from 'axios';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '../Profile.module.scss';
import MenuMoreActions from './MenuMoreActions';
import MenuShareProfile from './MenuShareProfile';
import { useEffect, useState } from 'react';
import { configBaseURL, configHeader } from '~/common/common';
import SekeletonLoadingForTagAndMusicV2 from '~/layouts/components/SekeletonLoading/SekeletonLoadingForTagAndMusicV2/SekeletonLoadingForTagAndMusicV2';

const cx = classNames.bind(styles);

function ProfileHeader({ user }) {
    const [currentUser, setCurrentUser] = useState(false);
    const [followingAccounts, setFollowingAccount] = useState([]);
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        document.title = `${user.data.nickname} (@${user.data.nickname}) TikTok | Xem các video mới nhất của ${user.data.nickname}`;
    }, [user.data.nickname]);

    useEffect(() => {
        if (user.data.isMe) {
            setCurrentUser(true);
        } else {
            setCurrentUser(false);
        }

        followingAccounts.forEach((account) => {
            if (user.data.nickname === account.nickname) {
                setTimeout(() => {
                    setCheck(true);
                },1)
            } else {
                setCheck(false);
            }
        })
    }, [user.data.nickname, user, followingAccounts]);

    useEffect(() => {
        try {
            //
            axios
                .get(`${configBaseURL}/api/users/get-follow-user`, configHeader)
                .then((result) => {
                    setFollowingAccount(result.data[0].fllowing);
                    if(result) {
                        setTimeout(() => {
                            setLoading(true)
                        },500)
                        setLoading(false)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }, []);

    return (
        <>
            {loading ? (<div className={cx('profile-content-header')}>
                <div className={cx('profile-info')}>
                    <div className={cx('avatar-container')}>
                        <span shape="circle" className={cx('span-avatar-container')}>
                            <img loading="lazy" alt="" src={user.data.avatar} className={cx('avatar-img')} />
                        </span>
                    </div>
                    <div className={cx('title-container')}>
                        <div className={cx('title-profile')}>{user.data.nickname}</div>
                        <h1 className={cx('title-sub')}>{user.data.nickname}</h1>
                        {currentUser ? (
                            <div className={cx('edit-container')}>
                                <Button text className={cx('btn-edit')}>
                                    <span>
                                        <EditProfile className={cx('edit-profile-icon')} />
                                        <span>Sửa hồ sơ</span>
                                    </span>
                                </Button>
                            </div>
                        ) : (
                            <>
                                {check ? (
                                    <div className={cx('follow-container')}>
                                    <div className={cx('follow-btn-wrapper')}>
                                        <Button text >
                                            Đang follow
                                        </Button>
                                    </div>
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
                            </>
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
                {user.data.description === '' ? (
                    <h2 className={cx('desc')}>Chưa có tiểu sử.</h2>
                ) : (
                    <h2 className={cx('desc')}>{user.data.description}</h2>
                )}
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
            </div>) : <SekeletonLoadingForTagAndMusicV2 className={cx('avatar-profile')}/>}
        </>
    );
}

export default ProfileHeader;
