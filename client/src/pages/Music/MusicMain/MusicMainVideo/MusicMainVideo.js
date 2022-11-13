import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './MusicMainVideo.module.scss';
import ItemVideo from './ItemVideo';
import { configBaseURL } from '~/common/common';
import SekeletonLoadingForVideo from '~/layouts/components/SekeletonLoading/SekeletonForVideo/SekeletonLoadingForVideo';

const cx = classNames.bind(styles);

function MusicMainVideo({ metadata }) {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setShow(false)
        try {
            axios
                .get(`${configBaseURL}/api/video/get-list-video-music/${id}`)
                .then((result) => {
                    setData(result.data);
                    if (result) {
                        setTimeout(() => {
                            setShow(true);
                        }, 1000);
                    }
                })
                .catch((err) => {});
        } catch (error) {}
    }, [id]);

    return (
        <div className={cx('grid-video-container')}>
            {data.length > 0 ? (
                <div className={cx('grid-video-list')}>
                    {show ? (
                        <>
                            {data.map((item, index) => {
                                return <ItemVideo data={item} key={index} metadata={metadata} />;
                            })}
                        </>
                    ) : (
                        <>
                            {data.map(() => {
                                return <SekeletonLoadingForVideo />;
                            })}
                        </>
                    )}
                </div>
            ) : (
                <div className={cx('not-video')}>Chưa có video nào</div>
            )}
        </div>
    );
}

export default MusicMainVideo;
