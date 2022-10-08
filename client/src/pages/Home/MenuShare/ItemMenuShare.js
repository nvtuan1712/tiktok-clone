import classNames from 'classnames/bind';

import styles from './MenuShare.module.scss';

const cx = classNames.bind(styles);

function ItemMenuShare({icon, text, onclick}) {
    return ( 
        <a href="#" onClick={onclick} className={cx('share-link')}>
                {icon}
                <span className={cx('share-text')}>{text}</span>
        </a>
     );
}

export default ItemMenuShare;