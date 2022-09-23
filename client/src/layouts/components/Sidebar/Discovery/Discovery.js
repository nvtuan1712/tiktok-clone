import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import { useState } from 'react';

import styles from './Discovery.module.scss';
import DiscoveryItem from './DiscoveryItem';

const cx = classNames.bind(styles);

function Discovery({ label }) {
    const tagArray = [
        {
            text: 'suthatla',
            path: 'tag',
        }, 
        {
            text: 'mackedoi',
            path: 'tag'
        }, 
        {
            text: 'sansangthaydoi',
            path: 'tag',
        }, 
        {
            text: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
            path: 'music',
        },
        {
            text: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
            path: 'music'
        },
        {
            text: 'Thiên Thần Tình Yêu - RICKY STAR',
            path: 'music'
        },
        {
            text: '7749hieuung',
            path: 'tag'
        },
        {
            text: 'genzlife',
            path: 'tag'
        },
        {
            text: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
            path: 'music'
        },
        {
            text: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
            path: 'music'
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('discovery-list')}>
                {tagArray.map((text, index) => {
                    return <DiscoveryItem key={index} text={tagArray[index].text} path={tagArray[index].path}/>
                })}
            </div>
        </div>
    );
}

Discovery.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discovery;
