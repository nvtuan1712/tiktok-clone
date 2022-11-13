//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Video.module.scss';
import VideoContent from './VideoContent';
import VideoPlayer from './VideoPlayer';


const cx = classNames.bind(styles);

function Video({ data, onClick, followUser }) {
    return (
        <div className={cx('container')}>
            <VideoPlayer data={data} onClick={onClick} />
            <VideoContent data={data} followUser={followUser}/>
        </div>
    );
}

export default Video;
