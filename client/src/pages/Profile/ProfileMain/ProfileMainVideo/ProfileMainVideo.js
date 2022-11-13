import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from '~/pages/Profile/Profile.module.scss';
import ItemVideo from './ItemVideo';
import { configBaseURL, configHeader } from '~/common/common';
import SekeletonLoadingForVideo from '~/layouts/components/SekeletonLoading/SekeletonForVideo/SekeletonLoadingForVideo';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProfileMainVideo({ followUser }) {
    const [arrVideo, setArrVideo] = useState([]);
    const [show, setShow] = useState(false);
    const { nickname } = useParams();

    useEffect(() => {
        try {
            axios
                .get(`${configBaseURL}/api/video/get-list-video-user/${nickname}`, configHeader)
                .then((result) => {
                    setArrVideo(result.data);
                    if(result) {
                        setTimeout(() => {
                            setShow(true);
                        }, 1000);
                        setShow(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {}
    }, [nickname]);

    return (
        <div className={cx('grid-video-container')}>
            <div className={cx('grid-video-list')}>
                {show ? (
                    <>
                        {arrVideo.map((item, index) => {
                            return <ItemVideo data={item} key={index} followUser={followUser}/>;
                        })}
                    </>
                ) : (
                    <>
                        {arrVideo.map(() => {
                            return <SekeletonLoadingForVideo/>
                        })}
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfileMainVideo;
