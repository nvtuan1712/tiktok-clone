import classNames from 'classnames/bind';
import styles from './SuggestedAccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { configBaseURL, configHeader } from '~/common/common';


const cx = classNames.bind(styles);

function AccountPreview({ user }) {
    const [checkFollow, setCheckFollow] = useState(false);
    const configHeader1 = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            IdAccount: `Bearer ${localStorage.getItem('idAccount')}`,
            IdUser: `Bearer ${user.id}`,
        },
    };

    let arr = useRef()

    useEffect(() => {
        setTimeout(() => {
            arr.current.forEach((check) => {
                if(check.nickname === user.nickname){
                    setCheckFollow(true)
                }
            })
        }, 1000)
        try {
            //
            axios
                .get(`${configBaseURL}/api/users/get-follow-user`, configHeader)
                .then((result) => {
                    arr.current = result.data[0].fllowing
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, [user.nickname]);

    const handleFollow = async () => {
        setCheckFollow(true);
        try {
            //
            await axios.post('http://localhost:5000/api/users/follow-user', configHeader1)
            .then((result) => {
                
            }).catch((err) => {
                
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUnFollow = async() => {
        setCheckFollow(false);
        try {
            //
            await axios.post('http://localhost:5000/api/users/unfollow-user', configHeader1)
            .then((result) => {
                
            }).catch((err) => {
                
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663660800&x-signature=oxiMe9kkqfLoIDJkbuH6%2Bl6FXVw%3D"
                    alt="avatar"
                />
                {checkFollow ? (
                    <Button text className={cx('follow-btn')} onClick={handleUnFollow}>
                        Đang follow
                    </Button>
                ) : (
                    <Button primary className={cx('follow-btn')} onClick={handleFollow}>
                        Follow
                    </Button>
                )}
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user.nickname}</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>{user.nickname}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{user.follower_count} </strong>
                    <label className={cx('label')}>Followers</label>
                    <strong className={cx('value')}>{user.heart_count} </strong>
                    <label className={cx('label')}>Thích </label>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
