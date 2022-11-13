//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import Button from '~/components/Button';
import { Comment, Heart, Music, Share, VideoPlay, VideoReport, VideoVoice } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './RecommendItem.module.scss';
import MenuShare from '../MenuShare';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function RecommendItem({ data }) {
    return (
        <div className={cx('container')}>
            {/* avatar profile */}
            <Link to={`/${data.author.nickname}`} className={cx('avatar-anchor')}>
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-style')}>
                        <img
                            alt=""
                            className={cx('avatar-img')}
                            src={data.author.avatar}
                        ></img>
                    </span>
                </div>
            </Link>

            <div className={cx('content-container')}>
                {/* info container */}
                <div className={cx('info-container')}>
                    <div className={cx('author-container')}>
                        <Link to={`/${data.author.nickname}`} className={cx('author-anchor')}>
                            <h3 className={cx('author-title')}>{data.author.nickname}</h3>
                            <h4 className={cx('author-name')}>{data.author.name}</h4>
                            <span> . </span>
                            {data.created_at.slice(5, 10)}
                        </Link>
                    </div>
                    <div className={cx('desc')}>
                        <span className={cx('span-text')}>{data.description}</span>
                    </div>
                    <h4 className={cx('h4link')}>
                        <Link to={`/music/${data.music.name}-${data.music.id}`}>
                            <Music className={cx('music-icon')} />
                            <span>{data.music.name} - {data.music.singer ? data.music.singer : data.author.nickname}</span>
                        </Link>
                    </h4>
                </div>
                {/* video container */}
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card-container')}>
                        <canvas width="56.25" height="100" className={cx('canvas-video-player')}></canvas>
                        <div className={cx('video-player-container')}>
                            <div className={cx('video-container')}>
                                <div className={cx('basic-player-wrapper')}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <video
                                            src={data.video}
                                            controls
                                            muted
                                            disablePictureInPicture
                                            loop
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
