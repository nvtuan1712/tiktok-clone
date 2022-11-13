//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Comment, Heart, MoreAction, Music } from '~/components/Icons';
import ItemComment from './ItemComment';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoContent.module.scss';

const cx = classNames.bind(styles);

function    VideoContent({ data, followUser }) {
    return (
        <div className={cx('container')}>
            <VideoInfo data={data} followUser={followUser} />
            <MainContent data={data} />
            <CommentList data={data} />
            <BottomComment />
        </div>
    );
}

//Video Info
function VideoInfo({ data, followUser }) {
    const [check, setCheck] = useState(false);
    const [checkCurrent, setCheckCurrent] = useState(false);
    const [time, setTime] = useState(false);
    const { nickname } = useParams();
    const nick = data.author.nickname;

    useEffect(() => {
        followUser.forEach((account) => {
            if (nick === account.nickname) {
                setCheck(true);
            }
        });
        if(nick === localStorage.getItem('nickName')) {
            setCheckCurrent(true);
        }
        setTimeout(() => {
            setTime(true)
        }, 1)
    }, [nick, followUser]);
    return (
        <div className={cx('info-container')}>
            <Link to={`/${nickname}`} className={cx('link-avatar')}>
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-span')}>
                        <img src={data.author.avatar} alt="" loading="lazy" />
                    </span>
                </div>
            </Link>
            <Link to={`/${nickname}`} className={cx('link-info')}>
                <span className={cx('span-id')}>{data.author.nickname}</span>
                <br></br>
                <span className={cx('span-other-info')}>
                    {data.author.name}
                    <span style={{ margin: '0px 4px' }}> . </span>
                    <span>{data.created_at.slice(5, 10)}</span>
                </span>
            </Link>
            {time && <>{checkCurrent  ? (
                <MoreAction />
            ) : (
                <>
                    {check  ? (
                        <button className={cx('btn-unfollow')}>Đang follow</button>
                    ) : (
                        <button className={cx('btn-follow')}>Follow</button>
                    )}
                </>
            )}</>}
        </div>
    );
}

//Main video container
function MainContent({ data }) {
    const currentURL = window.location.href;

    return (
        <div className={cx('content-container')}>
            {/*  */}
            <div className={cx('video-desc')}>
                <span className={cx('span-text')}>{data.description}</span>
                <Link className={cx('common-link')} to={`/tag/${data.trendy.name}`}>
                    <strong>#{data.trendy.name}</strong>
                </Link>
            </div>
            {/*  */}
            <h4 className={cx('h4-link')}>
                <Link to={`/music/${data.music.name}`} className={cx('music')}>
                    <Music />
                    <div style={{ marginTop: '2px' }}>
                        {data.music.name} - {data.music.singer ? data.music.singer : data.author.nickname}
                    </div>
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
                            <strong className={cx('strong-text')}>{data.heart_count}</strong>
                        </button>
                        <button className={cx('action-item')} disabled>
                            <span className={cx('span-icon')}>
                                <Comment />
                            </span>
                            <strong className={cx('strong-text')}>{data.comment_count}</strong>
                        </button>
                    </div>
                </div>
                <div className={cx('coppylink-container')}>
                    <p className={cx('coppylink-text')}>{currentURL}</p>
                    <button className={cx('button-coppylink')}>Sao chép liên kết</button>
                </div>
            </div>
        </div>
    );
}

//Comment list container
function CommentList({ data }) {
    return (
        <div className={cx('comment-list-container')}>
            <ItemComment data={data} />
        </div>
    );
}

//Bottom comment contauiner
function BottomComment() {
    const input = useRef();
    const commentBtn = useRef();

    const handleChangeColor = () => {
        if (input.current.value !== '') {
            commentBtn.current.classList.add(cx('active'));
        } else {
            commentBtn.current.classList.remove(cx('active'));
        }
    };

    return (
        <div className={cx('bottom-comment-container')}>
            <div className={cx('comment-container')}>
                <div className={cx('comment-layout-container')}>
                    <input
                        ref={input}
                        type="text"
                        className={cx('comment-input')}
                        placeholder="Thêm bình luận..."
                        onChange={handleChangeColor}
                    />
                </div>
                <div ref={commentBtn} className={cx('comment-post-button')}>
                    Đăng
                </div>
            </div>
        </div>
    );
}

export default VideoContent;
