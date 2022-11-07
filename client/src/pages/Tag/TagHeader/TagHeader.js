//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
// import { useRef } from 'react';
// import Button from '~/components/Button';
import { MoreAction, ShareProfile } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './TagHeader.module.scss';
import MenuMoreActions from './MenuMoreActions';
import MenuShareProfile  from './MenuShareTag';

const cx = classNames.bind(styles);

function TagHeader({ data }) {
    return (
        <div className={cx('content-header')}>
            <div className={cx('info')}>
                <div className={cx('avatar-container')}>
                    <span shape="circle" className={cx('span-avatar-container')}>
                        <img
                            loading="lazy"
                            alt=""
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4a7cd775e9232698e132c2206f9ad2de~c5_100x100.jpeg?x-expires=1664370000&amp;x-signature=V9rwgsuVRAUBKGLewv4HZ5E6iF8%3D"
                            className={cx('avatar-img')}
                        />
                    </span>
                </div>
                <div className={cx('title-container')}>
                    <h1 className={cx('title-profile')}>#{data.name}</h1>
                    <h2 className={cx('title-sub')} title='Lượt xem'>{data.watch_count} lượt xem</h2>
                </div>
            </div>
            <div className={cx('desc')}>
                <span>{data.description}</span>
            </div>
            <MenuShareProfile>
                <div className={cx('share-actions')}>
                    <ShareProfile/>
                </div>
            </MenuShareProfile>
            <MenuMoreActions>
                <div className={cx('more-actions')}>
                    <MoreAction />
                </div>
            </MenuMoreActions>
        </div>
    );
}

export default TagHeader;
