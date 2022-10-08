import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { PlayProfile } from '~/components/Icons';
import config from '~/config';
// import { Lock } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '~/pages/Profile/Profile.module.scss';

const cx = classNames.bind(styles);

function ItemVideo() {
    return (
        <>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx('item-container')}>
                <div className={cx('item-video')}>
                    <div style={{ paddingTop: '132.653%' }}>
                        <div className={cx('video-wrapper')}>
                            <Link to={config.routes.profile} target="_blank">
                                <canvas width="75.38461538461539" height="100" className={cx('video-canvas')}></canvas>
                                <div className={cx('player-container')}>
                                    <div className={cx('player-wrapper')}>
                                        <img
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5458d8a3f31c4e2a85d5b104a52499b1~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1664265600&x-signature=KrX68rFUSODZu7FOu7JHxTW8%2Bs0%3D"
                                            alt="Trả lời @beososweet xíu xoá liền"
                                            loading="lazy"
                                            className={cx('img-poster')}
                                        />
                                    </div>
                                    <div className={cx('player-footer')}>
                                        <PlayProfile className={cx('style-play')} />
                                        <strong className={cx('video-count')}>38.8k</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('item-card-desc')}>
                    <Link
                        to={config.routes.profile}
                        alt=""
                        title="Trả lời @beososweet xíu xoá liền"
                        className={cx('cap-line')}
                    >
                        <div className={cx('desc-container')}>
                            <span className={cx('span-text')}>Trả lời </span>
                            <span className={cx('cap-link')}>
                                <strong className={cx('strong-text')}> @beososweet</strong>
                            </span>
                            <span className={cx('span-text')}> xíu xóa liền</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ItemVideo;
