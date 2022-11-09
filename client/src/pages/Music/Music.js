//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Music.module.scss';
import MusicHeader from './MusicHeader';
import MusicMain from './MusicMain';
import { configBaseURL } from '~/common/common';
import SekeletonLoadingForTagAndMusicV2 from '~/layouts/components/SekeletonLoading/SekeletonLoadingForTagAndMusicV2/SekeletonLoadingForTagAndMusicV2';


const cx = classNames.bind(styles);

function Music() {
    const [music, setMusic] = useState([]);
    const [time, setTime] = useState(false);
    const { name } = useParams();

    useEffect(() => {
        try {
            //get list âm nhạc
            axios
                .get(`${configBaseURL}/api/music/${name}`)
                .then((result) => {
                    setMusic(result);
                    if (result) {
                        setTimeout(() => {
                            setTime(true);
                        }, 2000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, [name]);

    useEffect(() => {
        document.title = `${name} | Bài hát phổ biến trên TikTok`;
    });

    return (
        <>
            <div className={cx('layout')}>
                <div className={cx('content')}>
                {time ? (
                        <>
                            {music.data.map((item, index) => {
                                return <MusicHeader data={item} key={index} />;
                            })}
                        </>
                    ) : (
                        <SekeletonLoadingForTagAndMusicV2/>
                    )}
                    <MusicMain/>
                </div>
            </div>
        </>
    );
}

export default Music;
