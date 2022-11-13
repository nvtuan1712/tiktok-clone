//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { CheckProfile, Comment, Heart, Music, Share, VideoReport } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './RecommendItem.module.scss';
import MenuShare from '../MenuShare';
import { useEffect, useRef, useState } from 'react';
import Video from '~/components/Video';

const cx = classNames.bind(styles);

function RecommendItem({ data, index, followUser }) {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(false);
    const video = useRef();

    useEffect(() => {
        if (index === 0) {
            video.current.play();
        }

        if (localStorage.getItem('nickName') === data.author.nickname) {
            setCurrent(true);
        }
    }, [index, data.author.nickname]);

    const handleHide = () => {
        setShow(false);
        const nextURL = `http://localhost:3000/`;
        const nextTitle = 'My new page title';
        const nextState = { additionalInformation: 'Updated the URL with JS' };

        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL);
    };

    const test = (e) => {
        e.preventDefault();
        const nextURL = `http://localhost:3000/${data.author.nickname}/video/${data.id}`;
        const nextTitle = 'My new page title';
        const nextState = { additionalInformation: 'Updated the URL with JS' };

        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL);
        setShow(true);
    };

    return (
        <div className={cx('container')} index={index}>
            {/* avatar profile */}
            <Link to={`/${data.author.nickname}`} className={cx('avatar-anchor')} id="is-user">
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-style')}>
                        <img alt="" className={cx('avatar-img')} src={data.author.avatar}></img>
                    </span>
                </div>
            </Link>

            <div className={cx('content-container')}>
                {/* info container */}
                <div className={cx('info-container')}>
                    <div className={cx('author-container')}>
                        <Link to={`/${data.author.nickname}`} className={cx('author-anchor')}>
                            <h3 className={cx('author-title')}>{data.author.nickname}</h3>
                            {data.author.tick && <CheckProfile className={cx('check-icon')} />}
                            <h4 className={cx('author-name')}>{data.author.name}</h4>
                        </Link>
                    </div>

                    {current ? (
                        <></>
                    ) : (
                        <Button primary className={cx('follow-btn')}>
                            Follow
                        </Button>
                    )}

                    <div className={cx('desc')}>
                        <span className={cx('span-text')}>
                            {data.description}{' '}
                            <Link className={cx('tag-link')} to={`/tag/${data.trendy.name}`}>
                                #{data.trendy.name}
                            </Link>
                        </span>
                    </div>

                    <h4 className={cx('h4link')}>
                        <Link to={`/music/${data.music.name}-${data.music.id}`}>
                            <Music className={cx('music-icon')} />
                            <span>
                                {data.music.name} -{' '}
                                {data.music.singer !== '' ? data.music.singer : data.author.nickname}
                            </span>
                        </Link>
                    </h4>
                </div>
                {/* video container */}
                {show && <Video data={data} onClick={handleHide} followUser={followUser} />}
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card-container')}>
                        <canvas width="56.25" height="100" className={cx('canvas-video-player')}></canvas>
                        <div className={cx('video-player-container')}>
                            <div className={cx('video-container')}>
                                <div className={cx('basic-player-wrapper')}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <video
                                            onClick={test}
                                            src={data.video}
                                            muted
                                            controls
                                            disablePictureInPicture
                                            loop
                                            ref={video}
                                            controlsList="nodownload noplaybackrate nofullscreen"
                                        ></video>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('video-control-bottom')}></div>
                            <p className={cx('report-text')}>
                                <VideoReport className={cx('icon-flag')} />
                                <span>Báo cáo</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx('video-action-item-container')}>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('like-icon')} style={{ color: 'rgb(22, 24, 35)' }}>
                                <Heart />
                            </span>
                            <span className={cx('like-count')}>{data.heart_count}</span>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('comment-icon')} style={{ color: 'rgb(22, 24, 35)' }}>
                                <Comment />
                            </span>
                            <span className={cx('comment-count')}>{data.comment_count}</span>
                        </button>
                        <MenuShare className={cx('share-container')}>
                            <button className={cx('btn-action-item')}>
                                <span className={cx('share-icon')} style={{ color: 'rgb(22, 24, 35)' }}>
                                    <Share />
                                </span>
                                <span className={cx('share-count')}>{data.share_count}</span>
                            </button>
                        </MenuShare>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendItem;
