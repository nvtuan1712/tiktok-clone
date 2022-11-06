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

function TagHeader() {


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
                    <h1 className={cx('title-profile')}>#suthatla</h1>
                    <h2 className={cx('title-sub')}>3.1B lượt xem</h2>
                </div>
            </div>
            <div className={cx('desc')}>
                <p>Nếu cuộc sống luôn đơn giản như cách mọi người nghĩ thì chắc chắn sẽ không có gì thú vị rồi🤣 Sự thật là luôn có nhiều điều bất ngờ đằng sau, chia sẻ câu chuyện của bạn cùng đoạn âm thanh siêu hài hước nhé~😝</p>
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
