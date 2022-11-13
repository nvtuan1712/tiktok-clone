//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Following.module.scss';
import RecommendItem from './RecommendItem';
import { configBaseURL, configHeader } from '~/common/common';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import SekeletonLoadingForVideo from '~/layouts/components/SekeletonLoading/SekeletonForVideo/SekeletonLoadingForVideo';

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);
    const [followingAccounts, setFollowingAccount] = useState([]);
    const [check, setCheck] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.title = 'Đang follow - Xem video từ những nhà sáng tạo mà bạn follow | TikTok';
    }, []);

    useEffect(() => {
        setShow(false);
        if (localStorage.getItem('accessToken')) {
            try {
                axios
                    .get(`${configBaseURL}/api/video/get-list-video-login-follow`, configHeader)
                    .then((result) => {
                        setData(result.data);
                        if (result) {
                            setTimeout(() => {
                                setShow(true);
                            }, 1000);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
            setCheck(true);
        } else {
            try {
                axios
                    .get(`${configBaseURL}/api/video/get-list-first-video`)
                    .then((result) => {
                        if (result) {
                            setTimeout(() => {
                                setShow(true);
                            }, 1000);
                        }
                        const authors = result.data.map((o) => o.author.id);
                        const filtered = result.data.filter(
                            ({ author }, index) => !authors.includes(author.id, index + 1),
                        );
                        setData(filtered);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    //lấy người người dùng follow của người dùng đang đăng nhập
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

    console.log(data);
    return (
        <div className={cx('main-container')}>
            {show ? <>{check && followingAccounts.length > 0 ? (
                <>
                    {data.map((item, index) => {
                        return <RecommendItem data={item} key={index}/>
                    })}
                </>
            ) : (
                <div className={cx('user-list-wrapper')}>
                    {data.map((item, index) => {
                        return (
                            <div className={cx('DUser-card')} key={index}>
                                <Link target="_blank" to={`/${item.author.nickname}`} className={cx('AUser-card')}>
                                    <div className={cx('video-container')}>
                                        <div className={cx('player-wrapper')}>
                                            <video className={cx('video')} src={item.video}></video>
                                        </div>
                                    </div>
                                    <div className={cx('info-container')}>
                                        <span className={cx('span-avatar-container')}>
                                            <img src={item.author.avatar} alt="" loading="lazy" />
                                        </span>
                                        <h5 className={cx('user-name')}>{item.author.name}</h5>
                                        <h6 className={cx('user-nickname')}>
                                            <span>{item.author.nickname}</span>
                                        </h6>
                                        <div className={cx('button-container')}>
                                            <Button primary>Follow</Button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}</> : <SekeletonLoadingForVideo/>}
        </div>
    );
}

export default Home;
