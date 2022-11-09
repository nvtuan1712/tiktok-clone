//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './VideoContent.module.scss';

const cx = classNames.bind(styles);

function ItemComment() {
    return (
        <div className={cx('comment-item-container')}>
            <div className={cx('comment-content-container')}>
                <Link to={config.routes.profile} className={cx('style-userlink-avatar')}>
                    <span className={cx('avatar-span')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a88c702f5c75f4dbb8a568c002f7e1a~c5_100x100.jpeg?x-expires=1666443600&x-signature=xWvfWgbzXAZLY0OjxLhVMiGqHYw%3D"
                            alt=""
                            loading="lazy"
                        />
                    </span>
                </Link>
                <div className={cx('content-cm-container')}>
                    <Link to={config.routes.profile} className={cx('user-link-name')}>
                        <span className={cx('user-name-text')}>styledaudau</span>
                    </Link>
                    <div className={cx('comment-text')}>Supper cute</div>
                    <div className={cx('comment-sub-content')}>
                        <span className={cx('comment-time')}>6 ngày trước</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemComment;
