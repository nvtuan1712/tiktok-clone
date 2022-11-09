//Thư viện externor trước(thư viện bên ngoài)
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import {useParams} from "react-router-dom";

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Video.module.scss';
import VideoContent from './VideoContent';
import { configBaseURL } from '~/common/common'
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';


const cx = classNames.bind(styles);

function Video() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const { nickname } = useParams();
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`${configBaseURL}/api/video/${nickname}/${id}`)
        .then((result) => {
            setData(result.data)
            if(result) {
                setShow(true)
            }
        }).catch((err) => {
            console.log(err);
        });
    },[nickname, id])

    return (
        <div className={cx('container')}>
            {show && <VideoPlayer data={data}/>}
            {show && <VideoContent data={data}/>}
        </div>
    );
}

export default Video;
