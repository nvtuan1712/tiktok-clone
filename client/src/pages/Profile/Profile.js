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
    const [time, setTime] = useState(false)
    const {nickname} = useParams();
    const check = localStorage.getItem('accessToken')

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

    return (
        <div className={cx('profile-layout')}>
            <div className={cx('profile-content')}>
                {time && <ProfileHeader user={user}/>}
                {time && <ProfileMain />}
            </div>
        </div>
    );
}

export default Profile;
