//Thư viện externor trước(thư viện bên ngoài)
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { configBaseURL, configHeader } from '~/common/common';
import SekeletonLoadingForHome from '~/layouts/components/SekeletonLoading/SeleketonLoadingForHome/SeleketonLoadingForHome';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Home.module.scss';
import RecommendItem from './RecommendItem';

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);
    const [check, setCheck] = useState([]);
    const [followingAccounts, setFollowingAccount] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.title = 'Xem các video thịnh hành dành cho bạn | TikTok';
    }, []);

    useEffect(() => {
        if(localStorage.getItem('accessToken')) {
            try {
                axios
                    .get(`${configBaseURL}/api/users/get-liked-video`, configHeader)
                    .then((result) => {
                        if(result) {
                            setCheck(result.data)
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    },[]);

    useEffect(() => {
        setShow(false);
        if (localStorage.getItem('accessToken')) {
            try {
                axios
                    .get(`${configBaseURL}/api/video/get-list-video-login`, configHeader)
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
        } else {
            try {
                axios
                    .get(`${configBaseURL}/api/video/get-list-video`)
                    .then((result) => {
                        setData(result.data);
                        if (result) {
                            setTimeout(() => {
                                setShow(true);
                            }, 1500);
                        }
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
        if (localStorage.getItem('accessToken')) {
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
        }
    }, []);

    const shuffled = data.sort(() => Math.random() - 0.5);

    return (
        <div className={cx('main-container')}>
            <div>
                {show ? (
                    <>
                        {shuffled.reverse().map((item, index) => {
                            return (
                                <RecommendItem data={item} key={index} index={index} followUser={followingAccounts} check={check}/>
                            );
                        })}
                    </>
                ) : (
                    <SekeletonLoadingForHome />
                )}
            </div>
        </div>
    );
}

export default Home;
