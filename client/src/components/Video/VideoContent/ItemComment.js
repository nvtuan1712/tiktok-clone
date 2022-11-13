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
                            src=""
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
