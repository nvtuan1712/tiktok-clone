//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Thư viện internor sau(thư viện bên trong dự án)
import { configBaseURL } from '~/common/common';
import styles from './Tag.module.scss';
import TagHeader from './TagHeader';
import TagMain from './TagMain';
import { useParams } from 'react-router-dom';
import SekeletonLoadingForTagAndMusicV2 from '~/layouts/components/SekeletonLoading/SekeletonLoadingForTagAndMusicV2/SekeletonLoadingForTagAndMusicV2';

const cx = classNames.bind(styles);

function Tag() {
    const [trendy, setTrendy] = useState([]);
    const [time, setTime] = useState(false);
    const { name } = useParams();

    useEffect(() => {
        try {
            //get list âm nhạc
            axios
                .get(`${configBaseURL}/api/trendy/${name}`)
                .then((result) => {
                    setTrendy(result);
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
        document.title = `#${name} Gắn hastag cho các video trên TikTok`;
    });

    return (
        <>
            <div className={cx('layout')}>
                <div className={cx('content')}>
                    {time ? (
                        <>
                            {trendy.data.map((item, index) => {
                                return <TagHeader data={item} key={index} />;
                            })}
                        </>
                    ) : (
                        <SekeletonLoadingForTagAndMusicV2/>
                    )}
                    <TagMain />
                </div>
            </div>
        </>
    );
}

export default Tag;
