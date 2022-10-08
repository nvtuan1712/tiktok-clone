//Thư viện externor trước(thư viện bên ngoài)
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './Tag.module.scss';
import TagHeader from './TagHeader';
import TagMain from './TagMain';
import Video from '~/components/Video';

const cx = classNames.bind(styles);

function Tag() {
    const [showvideo, setShowVideo] = useState(false);

    const showVideo = () => {
        setShowVideo(!showvideo);
    };

    const hideVideo = () => {
        setShowVideo(false);
    };

    useEffect(() => {
        document.title = '#suthatla Gắn hastag cho các video trên TikTok';
    });

    return (
        <>
            <div className={cx('layout')}>
                <div className={cx('content')}>
                    <TagHeader />
                    <TagMain onClick={showVideo} />
                </div>
            </div>
            {showvideo && <Video onClick={hideVideo} />}
        </>
    );
}

export default Tag;
