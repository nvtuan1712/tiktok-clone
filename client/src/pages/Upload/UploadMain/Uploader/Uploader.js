//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import Button from '~/components/Button';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Uploader.module.scss';

const cx = classNames.bind(styles);

function Uploader() {
    return (
        <div className={cx('uploader')}>
            <div className={cx('upload')}>
                <div className={cx('upload-card')}>
                    <img
                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                        alt=""
                        className={cx('cloud-icon')}
                    />
                    <div className={cx('text-main')}>
                        <span>Chọn video để tải lên</span>
                    </div>
                    <div className={cx('text-sub')}>
                        <span>Hoặc kéo và thả tập tin</span>
                    </div>
                    <div className={cx('text-video-info')}>
                        <div><span>MP4 hoặc WebM</span></div>
                        <div><span>Độ phân giải 720x1280 trở lên</span></div>
                        <div><span>Tối đa 10 phút</span></div>
                        <div><span>Nhỏ hơn 2GB</span></div>
                    </div>
                    <div className={cx('file-select-btn')}>
                        <Button primary={true} className={cx('upload-btn')}>
                            <div>
                                <div>Chọn tập tin</div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uploader;
