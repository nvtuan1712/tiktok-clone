//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useState } from 'react';
// import { useState, useEffect, useRef, forwardRef } from 'react';
import { ArrowDownVideo, ArrowUpVideo, CloseVideo, LogoVideo, VideoReport } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoPlayer.module.scss';
import ModalReport from '~/components/ModalReport'

const cx = classNames.bind(styles);

function VideoPlayer({ onClick }) {
    return (
        <div className={cx('container')}>
            <BlurBackground />
            <VideoWrapper />
            <ButtonClose onClick={onClick} />
            <LogoVideo className={cx('style-logo')} />
            <ArrowUp/>
            <ArrowDown/>
            <Report/>
        </div>
    );
}

function BlurBackground() {
    return (
        <div
            className={cx('blur-background')}
            style={{
                backgroundImage:
                    'url(https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/8717b5b1ce3f4c9f8ae120b4ee2c1305~tplv-efzqqlc8t1-1:720:720.jpeg?x-expires=1665046800&x-signature=y9k%2Bx96OS4zQhYvMACQ0nxdMLTA%3D',
            }}
        ></div>
    );
}

function VideoWrapper() {
    // const videoRef = useRef();
    // const iconPlay = useRef();

    // const [timeShow, setTimeShow] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTimeShow(true);
    //     }, 500);
    // }, []);

    // const togglePlay = () => {
    //     if (videoRef.current.paused || videoRef.current.ended) {
    //         videoRef.current.play();
    //         iconPlay.current.style.display = 'none';
    //     } else {
    //         iconPlay.current.style.display = 'block';
    //         videoRef.current.pause();
    //     }
    // };

    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-container')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/e7655c6fce764d9e89c4cd2939dae1a3~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1666292400&x-signature=yN3fR55MwC6vsrZzHHZqtnapiow%3D"
                    alt=""
                    loading="lazy"
                    className={cx('video-img')}
                />
                <div className={cx('basic-player-wrapper')}>
                    <video
                        src="https://v16-webapp.tiktok.com/b2df61fef4c2fb43564cdece725600e2/6351a311/video/tos/useast2a/tos-useast2a-pve-0037-aiso/3af773a1a6d4431bb66af6ed2baadd9d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3026&bt=1513&cs=0&ds=3&ft=WgGbvNM6VQ9wU6nvj1W.CIpxatk3hdxwiMFYhkl8eC_O&mime_type=video_mp4&qs=0&rc=aTNoPGloZDlpZTk6NDc3PEBpajNldzg6ZnVoZzMzZjgzM0A0NjA0Ni8wXmMxMl9hMWJiYSNyYzAtcjRfMTFgLS1kL2Nzcw%3D%3D&l=202210201335350102452421970205E666&btag=80000"
                        loop
                        // id='video'
                        // ref={videoRef}
                        // onClick={togglePlay}
                        controls
                    ></video>
                </div>
                {/* <div ref={iconPlay} onClick={togglePlay} className={cx('icon-play-container')}>
                    <VideoPlay />
                </div> */}
            </div>
            {/* {timeShow && <VideoController ref={videoRef} />} */}
        </div>
    );
}

//custom videocontroller
// const VideoController = forwardRef((props, ref) => {
//     const [timeShow, setTimeShow] = useState(false);

//     useEffect(() => {
//         setTimeout(() => {
//             setTimeShow(true);
//         }, 500);
//     }, []);

//     return (
//         <div className={cx('video-control-container')}>
//             {/* {timeShow && <SeekBar ref={ref} />} */}
//             {/* {timeShow && <SeekBarTimer ref={ref} />} */}
//         </div>
//     );
// });

// const SeekBar = forwardRef((props, ref) => {
//     const seek = useRef();
//     const progressBar = useRef();
//     const videoDuration = Math.round(ref.current.duration);

//     ref.current.ontimeupdate = () => {
//         updateProgress()
//     }

//     function updateProgress() {
//         seek.current.innerText = Math.floor(ref.current.currentTime)
//         // progressBar.current.setValue(Math.floor(ref.current.currentTime))
//         console.log('hi');
//     }

//     return (
//         <div className={cx('seekbar-container')}>
//             {/* <process className={cx('seekbar-process')} min="0" max={videoDuration}></process> */}
//             <input
//                 onChange={() => {}}
//                 className={cx('seekbar-circle')}
//                 min="0"
//                 type="range"
//                 step="1"
//                 value='0'
//                 ref={seek}
//                 max={videoDuration}
//             ></input>
//             <div className={cx('seek-tooltip')}></div>
//         </div>
//     );
// });

// const SeekBarTimer = forwardRef((props, ref) => {
//     const seek = useRef();
//     const progressBar = useRef();
//     const videoDuration = Math.round(ref.current.duration);
//     const duration = Math.floor(ref.current.duration);
//     const time = useRef();

//     ref.current.ontimeupdate = () => {
//         currentTime();
//         updateProgress();
//     };

//     function updateProgress() {
//         seek.current.value = Math.floor(ref.current.currentTime);
//     }

//     function currentTime() {
//         time.current.innerText = Math.floor(ref.current.currentTime);
//     }

//     return (
//         <>
//             <div className={cx('seekbar-container')}>
//                 <process className={cx('seekbar-process')} min="0" max={videoDuration}></process>
//                 <input
//                     onChange={() => {}}
//                     className={cx('seekbar-circle')}
//                     min="0"
//                     type="range"
//                     step="1"
//                     value="0"
//                     ref={seek}
//                     max={videoDuration}
//                 ></input>
//                 <div className={cx('seek-tooltip')}></div>
//             </div>
//             <div className={cx('seekbar-time-container')}>
//                 00:<time ref={time}>00</time>
//                 <span> / </span>
//                 00:<time>{duration}</time>
//             </div>
//         </>
//     );
// });

//
function ButtonClose({ onClick }) {
    return (
        <div className={cx('btn-close')} onClick={onClick}>
            <CloseVideo />
        </div>
    );
}

//
function ArrowUp() {
    return (
        <button className={cx('btn-up')}>
            <ArrowUpVideo />
        </button>
    );
}

//
function ArrowDown() {
    return (
        <button className={cx('btn-down')}>
            <ArrowDownVideo />
        </button>
    );
}

//report
function Report() {
    const [showReport, setShowReport] = useState(false)

    const showModalReport = () => {
        setShowReport(!showReport)
    }

    const hideModalReport = () => {
        setShowReport(!showReport)
    }

    return (
        <>
            <div className={cx('btn-report')} onClick={showModalReport}>
                <VideoReport className={cx('style')}/>
                Báo cáo
            </div>
            {showReport ? <ModalReport onClick={hideModalReport}/> : <></>}
        </>
    )
}

export default VideoPlayer;
