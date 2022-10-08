//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
// import { useState, useEffect, useRef, forwardRef } from 'react';
import { ArrowDownVideo, ArrowUpVideo, CloseVideo, LogoVideo, VideoReport } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoPlayer.module.scss';

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
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/8717b5b1ce3f4c9f8ae120b4ee2c1305~tplv-efzqqlc8t1-1:720:720.jpeg?x-expires=1665046800&x-signature=y9k%2Bx96OS4zQhYvMACQ0nxdMLTA%3D"
                    alt=""
                    loading="lazy"
                    className={cx('video-img')}
                />
                <div className={cx('basic-player-wrapper')}>
                    <video
                        src="https://v16-webapp.tiktok.com/9d53ccbadc6ea4c37f3bf0d0ffc841e2/633ef6d6/video/tos/alisg/tos-alisg-pve-0037/431a36f45e6f484988cea6975ac63bcc/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3008&bt=1504&cs=0&ds=3&ft=eXd.6Hk_Myq8Z2ue3he2Nwhhml7Gb&mime_type=video_mp4&qs=0&rc=NTo0ZmY2OjNpNTY4ZjtlPEBpajtlaGU6ZnlrZTMzODgzNEBfYC0zMS4uXjQxNi82NTYxYSNtMGJrcjRfaXJgLS1kLy1zcw%3D%3D&l=202210060939390102450432130CBD4D81&btag=80000"
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
    return (
        <div className={cx('btn-report')}>
            <VideoReport className={cx('style')}/>
            Báo cáo
        </div>
    )
}

export default VideoPlayer;
