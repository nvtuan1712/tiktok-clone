//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Profile.module.scss';
import ProfileHeader from './ProfileHeader';
import ProfileMain from './ProfileMain';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { configBaseURL, configHeader } from '~/common/common'



const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({})
    const [followingAccounts, setFollowingAccount] = useState([]);  
    const [time, setTime] = useState(false)
    const {nickname} = useParams();
    const check = localStorage.getItem('accessToken')

    //lấy người dùng khi đăng nhập và khi không
    useEffect(() => {
        if(check) {
            try {
                //
                axios.get(`${configBaseURL}/api/users/auth/${nickname}`, configHeader)
                .then((result) => {
                    setUser(result)
                    if(result) {
                        setTimeout(() => {
                            setTime(true)
                        }, 1000)
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                //
                axios.get(`${configBaseURL}/api/users/${nickname}`)
                .then((result) => {
                    setUser(result)
                    if(result) {
                        setTimeout(() => {
                            setTime(true)
                        }, 1000)
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }
    },[nickname, check])

    //lấy người người dùng follow của người dùng đang đăng nhập
    useEffect(() => {
        try {
            //
            axios
                .get(`${configBaseURL}/api/users/get-follow-user`, configHeader)
                .then((result) => {
                    setFollowingAccount(result.data[0].fllowing);
                })
                .catch((err) => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }, []);

    return (
        <div className={cx('profile-layout')}>
            <div className={cx('profile-content')}>
                {time && <ProfileHeader user={user} followUser={followingAccounts}/>}
                {time && <ProfileMain followUser={followingAccounts}/>}
            </div>
        </div>
    );
}

export default Profile;
