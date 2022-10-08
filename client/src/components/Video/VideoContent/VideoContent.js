//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Music } from '~/components/Icons';
import config from '~/config';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoContent.module.scss';

const cx = classNames.bind(styles);

function VideoContent() {
    return (
        <div className={cx('container')}>
            <VideoInfo />
        </div>
    );
}

//Video Info
function VideoInfo() {
    return (
        <div className={cx('info-container')}>
            <Link to={config.routes.profile} className={cx('link-avatar')}>
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-span')}>
                        <img
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9d98723d8d7b16fb8b488a768db94591.jpeg?x-expires=1665324000&x-signature=FJxzUgYVhWnDTjRp1ggM6RTDs0w%3D"
                            alt=""
                            loading="lazy"
                        />
                    </span>
                </div>
            </Link>
            <Link to={config.routes.profile} className={cx('link-info')}>
                <span className={cx('span-id')}>styledaudau</span>
                <br></br>
                <span className={cx('span-other-info')}>
                    styledaudau
                    <span style={{margin: '0px 4px'}}> . </span>    
                    <span>9-29</span>
                </span>
            </Link>
            <button className={cx('btn-follow')}>Follow</button>
        </div>
    );
}

//Main video container
function MainContent() {
    return <div className={cx('content-container')}>
        <div className={cx('video-desc')}>
            <span className={cx('span-text')}>biến hình hoàn hảo</span>
            <Link className={cx('common-link')} to={config.routes.tag}>
                <strong>#xuhuongtiktok</strong>
            </Link>
            <Link className={cx('common-link')} to={config.routes.tag}>
                <strong>#gái xinh</strong>
            </Link>
            <h4 className={cx('h4-link')}>
                <Link to={config.routes.music}>
                    <Music/>
                    nhạc nền - styledaudau
                </Link>
            </h4>
        </div>
    </div>
}

export default VideoContent;
