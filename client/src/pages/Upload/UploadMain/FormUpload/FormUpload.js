//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Button from '~/components/Button';
import { ArrowDown, Check } from '~/components/Icons';
// import Button from '~/components/Button';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './FormUpload.module.scss';

const cx = classNames.bind(styles);

function FormUpload() {
    return (
        <div className={cx('form')}>
            <Caption />
            <Thumbnail />
            <Selection />
            <Coppyright />
            <ButtonRow />
        </div>
    );
}

//hàm xử lý đặt caption cho video
function Caption() {
    return (
        <div className={cx('caption-wrap')}>
            <div className={cx('caption-container')}>
                <div>
                    <div className={cx('caption-text-container')}>
                        <span className={cx('title-text-span')}>Chú thích</span>
                        <span className={cx('caption-required-font')}>
                            <span>0</span> / 150
                        </span>
                    </div>
                    <div className={cx('caption-input-container')}>
                        <div className={cx('caption-input-editor')}>
                            <div className={cx('input-editor-container')}>
                                <div
                                    aria-autocomplete="list"
                                    aria-expanded="false"
                                    contentEditable="true"
                                    spellCheck="false"
                                    className={cx('editor-input')}
                                ></div>
                            </div>
                        </div>
                        <div className={cx('caption-icon-at', 'icon-style')}>
                            <img
                                src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg"
                                alt=""
                            />
                        </div>
                        <div className={cx('caption-icon-hash', 'icon-style')}>
                            <img
                                src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//hàm xử lý đặt thumbnail cho video
function Thumbnail() {
    return (
        <div className={cx('thumbnail-wrap')}>
            <span className={cx('title-text-span')}>Ảnh bìa</span>
            <div className={cx('thumbnail-container')}>
                <div className={cx('thumbnail-bg-container')}>
                    <div className={cx('thumbnail-candiate')}></div>
                </div>
            </div>
        </div>
    );
}

//component xử lý check cho video
function Selection() {
    const iconArrow = useRef();
    const iconCheck = useRef();
    const iconCheck1 = useRef();

    const rotage = () => {
        iconArrow.current.classList.toggle(cx('rotate'));
    };

    const checkRole = () => {
        iconCheck.current.classList.toggle(cx('checked'));
    };

    const checkRole1 = () => {
        iconCheck1.current.classList.toggle(cx('checked'));
    };

    return (
        <div className={cx('selection-wrap')}>
            {/*  */}
            <div className={cx('selection-title')}>
                <span className={cx('title-text-span')}>Ai có thể xem video này</span>
            </div>
            {/*  */}
            <div className={cx('selection-select')}>
                <div className={cx('select-selector')}>
                    <div className={cx('select-selector-left')}>
                        <span className={cx('select-selector-text')}>Công khai</span>
                    </div>
                    <div className={cx('select-selector-icon')} onClick={rotage} ref={iconArrow}>
                        <ArrowDown />
                    </div>
                </div>
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

    console.log(modal);

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
    return (
        <div className={cx('buttonrow-wrap')}>
            <div className={cx('btn-cancel')}>
                <button className={cx('btn-cancel-container', 'btn')}>
                    <div className={cx('btn-text-container')}>
                        <div className={cx('btn-text')}>Hủy bỏ</div>
                    </div>
                </button>
            </div>
            <div className={cx('btn-post')}>
                <button className={cx('btn-post-container', 'btn')} disabled>
                    <div className={cx('btn-text-container')}>
                        <div className={cx('btn-text')}>Đăng</div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default FormUpload;
