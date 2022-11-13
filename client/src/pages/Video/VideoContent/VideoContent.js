//Thư viện externor trước(thư viện bên ngoài)
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { configBaseURL, configHeader } from '~/common/common';
import { Comment, Heart, Music } from '~/components/Icons';
import ItemComment from './ItemComment';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoContent.module.scss';

const cx = classNames.bind(styles);

function VideoContent({ data }) {
    return (
        <div className={cx('container')}>
            <VideoInfo data={data} />
            <MainContent data={data} />
            <CommentList data={data} />
            <BottomComment />
        </div>
    );
}

//Video Info
function VideoInfo({ data }) {
    const [followingAccounts, setFollowingAccount] = useState([]);
    const [check, setCheck] = useState(false);
    const { nickname } = useParams();
    const nick = data[0].author.nickname;
    let arr = useRef();
    arr = followingAccounts

    useEffect(() => {
        arr.forEach((account) => {
            if (nick === account.nickname) {
                setCheck(true);
            }
        });
    }, [nick, followingAccounts]);

    useEffect(() => {
        try {
            //
            axios
                .get(`${configBaseURL}/api/users/get-follow-user`, configHeader)
                .then((result) => {
                    setFollowingAccount(result.data[0].fllowing);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={cx('info-container')}>
            <Link to={`/${nickname}`} className={cx('link-avatar')}>
                <div className={cx('avatar-container')}>
                    <span className={cx('avatar-span')}>
                        <img src={data[0].author.avatar} alt="" loading="lazy" />
                    </span>
                </div>
            </Link>
            <Link to={`/${nickname}`} className={cx('link-info')}>
                <span className={cx('span-id')}>{data[0].author.nickname}</span>
                <br></br>
                <span className={cx('span-other-info')}>
                    {data[0].author.name}
                    <span style={{ margin: '0px 4px' }}> . </span>
                    <span>{data[0].created_at.slice(5, 10)}</span>
                </span>
            </Link>
            {check ? (
                <button className={cx('btn-unfollow')}>Đang follow</button>
            ) : (
                <button className={cx('btn-follow')}>Follow</button>
            )}
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
                <span className={cx('span-text')}>{data[0].description}</span>
                <Link className={cx('common-link')} to={`/tag/${data[0].trendy.name}`}>
                    <strong>#{data[0].trendy.name}</strong>
                </Link>
            </div>
            {/*  */}
            <h4 className={cx('h4-link')}>
                <Link to={`/music/${data[0].music.name}`} className={cx('music')}>
                    <Music />
                    <div style={{ marginTop: '2px' }}>
                        {data[0].music.name} - {data[0].author.name}
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
                            <strong className={cx('strong-text')}>{data[0].heart_count}</strong>
                        </button>
                        <button className={cx('action-item')} disabled>
                            <span className={cx('span-icon')}>
                                <Comment />
                            </span>
                            <strong className={cx('strong-text')}>{data[0].comment_count}</strong>
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
