//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Comment, Heart, Music } from '~/components/Icons';
import config from '~/config';
import ItemComment from './ItemComment';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoContent.module.scss';

const cx = classNames.bind(styles);

function VideoContent() {
    return (
        <div className={cx('container')}>
            <VideoInfo />
            <MainContent />
            <CommentList />
            <BottomComment/>
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
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a88c702f5c75f4dbb8a568c002f7e1a~c5_100x100.jpeg?x-expires=1666443600&x-signature=xWvfWgbzXAZLY0OjxLhVMiGqHYw%3D"
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
                    <span style={{ margin: '0px 4px' }}> . </span>
                    <span>9-29</span>
                </span>
            </Link>
            <button className={cx('btn-follow')}>Follow</button>
        </div>
    );
}

//Main video container
function MainContent() {
    const currentURL = window.location.href


    return (
        <div className={cx('content-container')}>
            {/*  */}
            <div className={cx('video-desc')}>
                <span className={cx('span-text')}>biến hình hoàn hảo</span>
                <Link className={cx('common-link')} to={config.routes.tag}>
                    <strong>#xuhuongtiktok</strong>
                </Link>
                <Link className={cx('common-link')} to={config.routes.tag}>
                    <strong>#gái xinh</strong>
                </Link>
            </div>
            {/*  */}
            <h4 className={cx('h4-link')}>
                <Link to={config.routes.music}>
                    <Music />
                    nhạc nền - styledaudau
                </Link>
            </h4>
            {/*  */}
            <div className={cx('div-container')}>
                <div className={cx('center-row')}>
                    <div className={cx('center-row1')}>
                        <button className={cx('action-item')}>
                            <span className={cx('span-icon')}>
                                <Heart />
                            </span>
                            <strong className={cx('strong-text')}>701.9k</strong>
                        </button>
                        <button className={cx('action-item')} disabled>
                            <span className={cx('span-icon')}>
                                <Comment />
                            </span>
                            <strong className={cx('strong-text')}>2718</strong>
                        </button>
                    </div>
                </div>
                <div className={cx('coppylink-container')}>
                <p className={cx('coppylink-text')}>
                    {currentURL}
                </p>
                <button className={cx('button-coppylink')}>Sao chép liên kết</button>
            </div>
            </div>
        </div>
    );
}

//Comment list container
function CommentList() {
    return (
        <div className={cx('comment-list-container')}>
            <ItemComment />
        </div>
    )
}

//Bottom comment contauiner
function BottomComment() {
    const input = useRef();
    const commentBtn = useRef();
    
    const handleChangeColor = () => {
        if(input.current.value !== '') {
            commentBtn.current.classList.add(cx('active'))
        }else{
            commentBtn.current.classList.remove(cx('active'))
        }
    }

    return (
        <div className={cx('bottom-comment-container')}>
            <div className={cx('comment-container')}>
                <div className={cx('comment-layout-container')}>
                    <input ref={input} type="text" className={cx('comment-input')} placeholder='Thêm bình luận...' onChange={handleChangeColor}/>
                </div>
                <div  ref={commentBtn} className={cx('comment-post-button')}>Đăng</div>
            </div>
        </div>
    )
}

export default VideoContent;
