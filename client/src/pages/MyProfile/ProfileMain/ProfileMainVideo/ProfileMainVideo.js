import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '~/pages/Profile/Profile.module.scss';
import ItemVideo from './ItemVideo';

const cx = classNames.bind(styles);

function ProfileMainVideo() {
    return (
        <div className={cx('grid-video-container')}>
            <div className={cx('grid-video-list')}>
                <ItemVideo/>
            </div>
        </div>
    );
}

export default ProfileMainVideo;
