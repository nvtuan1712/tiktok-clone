//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Profile.module.scss';
import ProfileHeader from './ProfileHeader';
import ProfileMain from './ProfileMain';
import { useEffect, useState } from 'react';
import axios from 'axios';


const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({})
    const [time, setTime] = useState(false)

    useEffect(() => {
        try {
            //
            const configHeader = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    Id: `Bearer ${localStorage.getItem('idAccount')}`
                }
            }

            axios.get('http://localhost:5000/api/users/user', configHeader)
            .then((result) => {
                setUser(result)
            }).catch((err) => {
                console.log(err);
            });

            setTimeout(() => {
                setTime(true)
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    },[])

    return (
        <div className={cx('profile-layout')}>
            <div className={cx('profile-content')}>
                {time && <ProfileHeader user={user}/>}
                {time && <ProfileMain/>}
            </div>
        </div>
    );
}

export default Profile;
