import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './TagMainVideo.module.scss';
import ItemVideo from './ItemVideo';

const cx = classNames.bind(styles);

function TagMainVideo({ onClick }) {
    return (
        <div className={cx('grid-video-container')}>
            <div className={cx('grid-video-list')}>
                <ItemVideo onClick={onClick}/>
            </div>
        </div>
    );
}

export default TagMainVideo;
