//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Button from '~/components/Button';
import { Check } from '~/components/Icons';
import { configBaseURL } from '~/common/common';
// import Button from '~/components/Button';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './FormUpload.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

function FormUpload() {
    return (
        <div className={cx('form')}>
            <Caption />
            {/* <Thumbnail /> */}
            <Selection />
            <Coppyright />
            <ButtonRow />
        </div>
    );
}

//hàm xử lý đặt caption cho video
function Caption() {
    const [checkCountCaption, setCheckCountCaption] = useState(0);
    const [checkCountTrendy, setCheckCountTrendy] = useState(0);
    const [checkCountMusic, setCheckCountMusic] = useState(0);
    const toastNotice = useRef()

    const handleCountCharacterCaption = (e) => {
        const str = e.target.value;
        setCheckCountCaption(str.length);
        if (str.length >= 150) {
            toastNotice.current.style.animation = `${cx('showToast')} 0.5s 0.1s ease forwards alternate `
            setTimeout(() => {
                toastNotice.current.style.animation = `${cx('hideToast')} 0.5s 0.1s ease`
            },3000)
        }
    };

    const handleCountCharacterTrendy = (e) => {
        const str = e.target.value;
        setCheckCountTrendy(str.length);
    };

    const handleCountCharacterMusic = (e) => {
        const str = e.target.value;
        setCheckCountMusic(str.length);
    };

    return (
        <div className={cx('caption-wrap')}>
            <div className={cx('toast')} ref={toastNotice}>
                <div className={cx('toast-notice')}>
                    <div className={cx('toast-notice-content')}>
                        <div>Tối đa 150 ký tự</div>
                    </div>
                </div>
            </div>
            <div className={cx('caption-container')}>
                <div>
                    <div className={cx('caption-text-container')}>
                        <span className={cx('title-text-span')}>Caption</span>
                        <span className={cx('caption-required-font')}>
                            <span>{checkCountCaption}</span> / 150
                        </span>
                    </div>
                    <div className={cx('caption-input-container')}>
                        <div className={cx('caption-input-editor')}>
                            <input
                                onChange={handleCountCharacterCaption}
                                maxLength="150"
                                spellCheck="false"
                                className={cx('editor-input')}
                                placeholder="Mô tả cho video"
                                id='desc'
                            ></input>
                        </div>
                    </div>
                    <div className={cx('caption-text-container')}>
                        <span className={cx('title-text-span')}>Xu hướng</span>
                        <span className={cx('caption-required-font')}>
                            <span>{checkCountTrendy}</span> / 150
                        </span>
                    </div>
                    <div className={cx('caption-input-container')}>
                        <div className={cx('caption-input-editor')}>
                            <input
                                onChange={handleCountCharacterTrendy}
                                spellCheck="false"
                                className={cx('editor-input')}
                                placeholder="Xu hướng nổi bật"
                                id='trendy'
                            ></input>
                        </div>
                    </div>
                    <div className={cx('caption-text-container')}>
                        <span className={cx('title-text-span')}>Âm nhạc</span>
                        <span className={cx('caption-required-font')}>
                            <span>{checkCountMusic}</span> / 150
                        </span>
                    </div>
                    <div className={cx('caption-input-container')}>
                        <div className={cx('caption-input-editor')}>
                            <input
                                onChange={handleCountCharacterMusic}
                                spellCheck="false"
                                className={cx('editor-input')}
                                placeholder="Âm nhạc thịnh hành"
                                id='music'
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//hàm xử lý đặt thumbnail cho video
// function Thumbnail() {
//     return (
//         <div className={cx('thumbnail-wrap')}>
//             <span className={cx('title-text-span')}>Ảnh bìa</span>
//             <div className={cx('thumbnail-container')}>
//                 <div className={cx('thumbnail-bg-container')}>
//                     <div className={cx('thumbnail-candiate')}></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//component xử lý check cho video
function Selection() {
    const iconCheck = useRef();
    const iconCheck1 = useRef();
    const [privateVideo, setPrivateVideo] = useState('Công khai');

    const checkRole = () => {
        iconCheck.current.classList.toggle(cx('checked'));
    };

    const checkRole1 = () => {
        iconCheck1.current.classList.toggle(cx('checked'));
    };

    const handleChange = (e) => {
        setPrivateVideo(e.target.value);
    };

    return (
        <div className={cx('selection-wrap')}>
            {/*  */}
            <div className={cx('selection-title')}>
                <span className={cx('title-text-span')}>Ai có thể xem video này</span>
            </div>
            {/*  */}
            <div>
                <select value={privateVideo} onChange={handleChange} id='select' className={cx('selection-select')}>
                    <option value="Công khai">Công khai</option>
                    <option value="Riêng tư">Riêng tư</option>
                </select>
            </div>
            {/*  */}
            <div className={cx('selection-title')}>
                <span className={cx('title-text-span')}>Cho phép người dùng</span>
            </div>
            {/*  */}
            <div className={cx('selection-checkbox')}>
                <div className={cx('checkbox')}>
                    <div className={cx('checkbox-container')}>
                        <label className={cx('checkbox-label')}>
                            <span className={cx('checkbox-text')}>Bình luận</span>
                        </label>
                        <div className={cx('checkbox-wrapper')}>
                            <input
                                id="checkbox1"
                                type="checkbox"
                                defaultChecked
                                className={cx('checkbox-input')}
                            ></input>
                            <div className={cx('checkbox-icon')} onClick={checkRole} ref={iconCheck}>
                                <Check />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('checkbox')}>
                    <div className={cx('checkbox-container')}>
                        <label className={cx('checkbox-label')}>
                            <span className={cx('checkbox-text')}>Chia sẻ</span>
                        </label>
                        <div className={cx('checkbox-wrapper')}>
                            <input
                                id="checkbox2"
                                type="checkbox"
                                defaultChecked
                                className={cx('checkbox-input')}
                            ></input>
                            <div className={cx('checkbox-icon')} ref={iconCheck1} onClick={checkRole1}>
                                <Check />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//component bản quyền cho video
function Coppyright() {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal);
    };

    const hideModal = () => {
        setModal(false);
    };

    return (
        <>
            <div className={cx('coppyright-wrap')}>
                <span className={cx('coppyright-span')}>
                    Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền hay không. Nếu chúng
                    tôi phát hiện có vi phạm, bạn có thể chỉnh sửa video trước khi đăng.
                </span>
                <span className={cx('coppyright-learnmore', 'coppyright-span')} onClick={showModal}>
                    Tìm hiểu thêm
                </span>
            </div>
            {modal && <Modal onClick={hideModal} />}
        </>
    );
}

//componeny Modal
function Modal({ onClick }) {
    return (
        <div className={cx('modal-mask')}>
            <div className={cx('modal-wrapper')}>
                <div className={cx('modal-title-wrapper')}>
                    <div className={cx('modal-title')}>Cách hoạt động của công đoạn kiểm tra bản quyền</div>
                </div>
                <div className={cx('modal-divider')}></div>
                <div className={cx('modal-content-wrapper')}>
                    <div className={cx('modal-content')}>
                        <span>
                            Tiến hành kiểm tra bản quyền đối với âm thanh mà bạn sử dụng trước khi đăng video để xác
                            định khả năng vi phạm bản quyền. Nếu phát hiện có vấn đề, bạn có thể chỉnh sửa video trước
                            khi đăng.
                        </span>
                        <br></br>
                        <span>
                            Bạn vẫn có thể đăng video đã bị gắn cờ vi phạm bản quyền. Tuy nhiên, video đó sẽ bị tắt
                            tiếng để bảo vệ bản quyền của âm thanh đang bị dùng trái phép.
                        </span>
                        <br></br>
                        <span>
                            Lưu ý: Kết quả kiểm tra bản quyền không phải là kết quả cuối cùng. Ví dụ: nếu về sau, sự cho
                            phép dùng âm thanh của người nắm giữ bản quyền có thay đổi thì điều này có thể ảnh hưởng đến
                            video của bạn.
                        </span>
                    </div>
                </div>
                <div className={cx('modal-divider')}></div>
                <div className={cx('modal-footer')}>
                    <Button primary onClick={onClick}>
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
}

//component đăng tải video
function ButtonRow() {
    const [show, setShow] = useState(false)

    const handleUploadVideo = async () => {
        const inputDesc = document.querySelector('#desc')
        const inputTrendy = document.querySelector('#trendy')
        const inputMusic = document.querySelector('#music')
        const selection = document.querySelector('#select')
        const video = document.querySelector('#uploadphoto')
        const file = video.files[0]
        const form = new FormData();
        form.append('myVideo', file)
        form.append('description', inputDesc.value)
        form.append('trendy', inputTrendy.value)
        form.append('music', inputMusic.value)
        form.append('selection', selection.value)
        try {
            const response = await axios({
                method: 'post',
                url: `${configBaseURL}/api/video/upload`,
                data: form,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                },
            });
            console.log(response);
            if(response.data === 'Upload Success!') {
                setShow(true)
            }
        } catch (error) {
            
        }
    }

    return (
        <>
            {show && <p>Đăng tải video thành công!</p>}
            <div className={cx('buttonrow-wrap')}>
                <div className={cx('btn-cancel')}>
                    <button className={cx('btn-cancel-container', 'btn')}>
                        <div className={cx('btn-text-container')}>
                            <div className={cx('btn-text')}>Hủy bỏ</div>
                        </div>
                    </button>
                </div>
                <div className={cx('btn-post')}>
                    <button className={cx('btn-post-container', 'btn')} onClick={handleUploadVideo}>
                        <div className={cx('btn-text-container')}>
                            <div className={cx('btn-text')}>Đăng</div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default FormUpload;
