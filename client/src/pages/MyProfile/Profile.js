//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Profile.module.scss';
import ProfileHeader from './ProfileHeader';
import ProfileMain from './ProfileMain';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile-layout')}>
            <div className={cx('profile-content')}>
                <ProfileHeader/>
                <ProfileMain/>
            </div>
        </div>
    );
}

export default Profile;
