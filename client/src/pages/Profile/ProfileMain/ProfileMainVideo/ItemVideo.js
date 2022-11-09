import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '~/pages/Profile/Profile.module.scss';

const cx = classNames.bind(styles);

function ItemVideo({ data }) {
    return (
        <>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={`/${data.author.nickname}/video/${data._id}`} >
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <video
                                            src={data.video}
                                            alt={data.description}
                                            loading="lazy"
                                            disablePictureInPicture
                                            loop 
                                            controlsList="nodownload noplaybackrate nofullscreen"
                                            autoPlay
                                            className={cx('video')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <strong className={cx('video-count')}>{data.watch_count}</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    
                </div>
            </div>
        </>
    );
}

export default ItemVideo;
