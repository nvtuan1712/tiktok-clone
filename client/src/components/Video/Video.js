//Thư viện externor trước(thư viện bên ngoài)
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { configBaseURL } from '~/common/common';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Video.module.scss';
import VideoContent from './VideoContent';
import VideoPlayer from './VideoPlayer';


const cx = classNames.bind(styles);

function Video({ data, onClick, followUser }) {

    useEffect(() => {
        try {
            axios.post(`${configBaseURL}/api/video/increase-views/${data.id}`)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        } catch (error) {
            
        }
    },[data.id])

    return (
        <div className={cx('container')}>
            <VideoPlayer data={data} onClick={onClick} />
            <VideoContent data={data} followUser={followUser}/>
        </div>
    );
}

export default Video;
