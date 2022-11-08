import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, icon, activeIcon, className }) {
    return (
        <label className={cx('menu-item', className)}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </label>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;