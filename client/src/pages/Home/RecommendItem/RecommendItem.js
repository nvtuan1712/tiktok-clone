//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { Comment, Heart, Music, Share, VideoPlay, VideoReport, VideoVoice } from '~/components/Icons';
import config from '~/config';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './RecommendItem.module.scss';
import MenuShare from '../MenuShare';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function RecommendItem() {
    return (
        <div className={cx('container')}>
            {/* avatar profile */}
            <Link to={config.routes.profile} className={cx('avatar-anchor')} id='is-user'>
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-style')}>
                        <img
                            alt=""
                            className={cx('avatar-img')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/21528276c4e3d7c6de719f5ba267ea3c~c5_100x100.jpeg?x-expires=1664074800&x-signature=VeI0UVVS1x2sDweAujTq%2BKO509Q%3D"
                        ></img>
                    </span>
                </div>
            </Link>

            <div className={cx('content-container')}>
                {/* info container */}
                <div className={cx('info-container')}>
                    <div className={cx('author-container')}>
                        <Link to={config.routes.profile} className={cx('author-anchor')}>
                            <h3 className={cx('author-title')}>luongthingoha</h3>
                            <h4 className={cx('author-name')}>Ngân Hà</h4>
                        </Link>
                    </div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <div className={cx('desc')}>
                        <span className={cx('span-text')}>Chờ nhé</span>
                    </div>
                    <h4 className={cx('h4link')}>
                        <Link to={config.routes.music}>
                            <Music className={cx('music-icon')} />
                            <span>nhạc nền - Ngân Hà</span>
                        </Link>
                    </h4>
                </div>
                {/* video container */}
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card-container')}>
                        <canvas width="56.25" height="100" className={cx('canvas-video-player')}></canvas>
                        <div className={cx('video-player-container')}>
                            <div className={cx('video-container')}>
                                <img
                                    className={cx('img-poster')}
                                    alt=""
                                    loading="lazy"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/405f4791214e4d569eafe343fbf8f1ba_1662609638~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1664006400&x-signature=78h4QHIsydBpxrOl4gkWVe9XGXY%3D"
                                ></img>
                                <div className={cx('basic-player-wrapper')}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <video
                                            src="https://v16-webapp.tiktok.com/58cfd5a087833e528fb3308f62859b65/632e7fdd/video/tos/useast2a/tos-useast2a-pve-0037-aiso/176027dee34b4ba08edfe07d17019fe1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5208&bt=2604&cs=0&ds=3&ft=z_piDPWT2NvjVHaelozfuCYQFAe4nRQjlbP.YtOB&mime_type=video_mp4&qs=0&rc=NWg8MzxmaDU8ZTdlaTs8OkBpanA0djo6ZnVwZjMzZjgzM0BhLl8yYTQwNV8xYjZeLzZeYSNpZC5kcjRnZGBgLS1kL2Nzcw%3D%3D&l=202209240256030102450322431A20B0D9&btag=80000"
                                            autoPlay
                                        ></video>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('play-icon-container')}>
                                <VideoPlay />
                            </div>
                            <div className={cx('voice-control-container')}>
                                <div className={cx('mute-icon-container')}>
                                    <VideoVoice />
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
                            <span className={cx('like-count')}>918.8k</span>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('comment-icon')} style={{ color: 'rgb(22, 24, 35)' }}>
                                <Comment />
                            </span>
                            <span className={cx('comment-count')}>1.8k</span>
                        </button>
                        <MenuShare className={cx('share-container')}>
                                <button className={cx('btn-action-item')}>
                                    <span className={cx('share-icon')} style={{ color: 'rgb(22, 24, 35)' }}>
                                        <Share />
                                    </span>
                                    <span className={cx('share-count')}>801</span>
                                </button>
                        </MenuShare>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendItem;
