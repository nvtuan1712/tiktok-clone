//Thư viện externor trước(thư viện bên ngoài)
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { configBaseURL } from '~/common/common';
import { CloseModal, EditAvatar } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './ModalUpdateProfile.module.scss';

const cx = classNames.bind(styles);

function ModalUpdateProfile({ data, onClick }) {
    const [checkCountNickName, setCheckCountNickName] = useState(0);
    const [checkCountName, setCheckCountName] = useState(0);
    const [checkCountDesc, setCheckCountDesc] = useState(0);
    const [valueNickName, setValueNickName] = useState('');
    const [valueName, setValueName] = useState('');
    const [valueDesc, setValueDesc] = useState('');
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    const inputImage = useRef();
    const inputNickName = useRef();
    const inputName = useRef();
    const inputDesc = useRef();
    const btnSubmit = useRef();

    useEffect(() => {
        if (image) {
            // inputFile.current.style.display = 'block';
        }
        //cleanup
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    }, [image]);

    const handleChooseImage = () => {
        inputImage.current.click();
    };

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };

    const handleCountCharacterCaption = (e) => {
        const value = e.target.value;

        if (e.target === inputNickName.current) {
            setCheckCountNickName(value.length);
            setValueNickName(value);
        } else if (e.target === inputName.current) {
            setCheckCountName(value.length);
            setValueName(value);
        } else if (e.target === inputDesc.current) {
            setCheckCountDesc(value.length);
            setValueDesc(value);
        }

        if (value.length >= 40 && e.target === inputNickName.current) {
            inputNickName.current.style.border = '1px solid red';
        } else {
            inputNickName.current.style.border = 'none';
        }

        if (value.length >= 40 && e.target === inputName.current) {
            inputName.current.style.border = '1px solid red';
        } else {
            inputName.current.style.border = 'none';
        }

        if (value.length >= 80 && e.target === inputDesc.current) {
            inputDesc.current.style.border = '1px solid red';
        } else {
            inputDesc.current.style.border = 'none';
        }

        if (inputNickName.current.value !== '' && inputDesc.current.value !== '' && inputName.current.value !== '') {
            btnSubmit.current.classList.remove(cx('disabled'));
        } else if(inputName.current.value === '' || inputDesc.current.value  === '' || inputNickName.current.value === '') {
            btnSubmit.current.classList.add(cx('disabled'));
        }
    };

    const handleUpdateProfile = async () => {
        if(valueNickName !== '' && valueName !== '' && valueDesc !== '') {
            const form = new FormData();
            form.append('myImage', inputImage.current.files[0]);
            form.append('nickname', valueNickName);
            form.append('name', valueName);
            form.append('desc', valueDesc);
            form.append('user', localStorage.getItem('idUser'));
            try {
                await axios({
                    method: 'post',
                    url: `${configBaseURL}/api/users/update`,
                    data: form,
                    headers: {
                        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                    },
                });
                setShow(true)
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('mask')}></div>
            <div className={cx('container')}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal')}>
                        <section>
                            <div className={cx('modal-main')}>
                                <div className={cx('header-container')}>
                                    Sửa hồ sơ
                                    <div className={cx('close-container')} onClick={onClick}>
                                        <CloseModal />
                                    </div>
                                </div>
                                <div className={cx('content-container')}>
                                    <div className={cx('div-content')}>
                                        <div className={cx('div-label')}>Ảnh hồ sơ</div>
                                        <div className={cx('div-avatar')}>
                                            <div className={cx('style-avatar')}>
                                                <span className={cx('span-avatar')}>
                                                    {image ? (
                                                        <img
                                                            src={image.preview}
                                                            alt="Avatar"
                                                            className={cx('avatar')}
                                                        />
                                                    ) : (
                                                        <img
                                                            src={data.data.avatar}
                                                            alt="Avatar"
                                                            className={cx('avatar')}
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                            <div className={cx('avatar-edit')} onClick={handleChooseImage}>
                                                <EditAvatar />
                                                <input
                                                    name="myImage"
                                                    ref={inputImage}
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handlePreviewImage}
                                                    className={cx('input-upload')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('div-content')}>
                                        <div className={cx('div-label')}>Biệt danh</div>
                                        <div className={cx('div-editarena')}>
                                            <input
                                                spellCheck="false"
                                                maxLength="40"
                                                ref={inputNickName}
                                                onChange={handleCountCharacterCaption}
                                                placeholder="Biệt danh"
                                                className={cx('input-text')}
                                            />
                                            <div className={cx('text-count')}>
                                                <span>{checkCountNickName}</span>/40
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('div-content')}>
                                        <div className={cx('div-label')}>Tên</div>
                                        <div className={cx('div-editarena')}>
                                            <input
                                                spellCheck="false"
                                                maxLength="40"
                                                ref={inputName}
                                                onChange={handleCountCharacterCaption}
                                                placeholder="Tên"
                                                className={cx('input-text')}
                                                />
                                            <div className={cx('text-count')}>
                                                <span>{checkCountName}</span>/40
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('div-content')}>
                                        <div className={cx('div-label')}>Tiểu sử</div>
                                        <div className={cx('div-editarena')}>
                                            <textarea
                                                spellCheck="false"
                                                ref={inputDesc}
                                                maxLength="80"
                                                onChange={handleCountCharacterCaption}
                                                className={cx('input-text-area')}
                                                placeholder="Tiểu sử"
                                                ></textarea>
                                            <div className={cx('text-count')}>
                                                <span>{checkCountDesc}</span>/80
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {show && <div style={{ color: 'red', fontSize: '14px', textAlign: 'center', marginTop: '16px' }}><strong>Cập nhật thông tin tài khoản thành công!</strong></div>}
                                <div className={cx('footer-container')}>
                                    <button className={cx('btn')}>Hủy</button>
                                    <button className={cx('btn', 'disabled')} onClick={handleUpdateProfile} ref={btnSubmit}>
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalUpdateProfile;