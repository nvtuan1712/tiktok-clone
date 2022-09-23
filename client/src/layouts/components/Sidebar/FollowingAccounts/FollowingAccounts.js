import PropTypes from 'prop-types';
import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import FollowingAccountItem from './FollowingAccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
    const currentUser = true;

    const [followingAccounts, setFollowingAccount] = useState([]);

    return (
        <>
            {currentUser ? (
                <div className={cx('wrapper')}>
                    <p className={cx('label')}>{label}</p>
                    {followingAccounts.length > 0 ? (
                        <>
                            <FollowingAccountItem />
                            <FollowingAccountItem />
                            <FollowingAccountItem />
                            <FollowingAccountItem />
                            <FollowingAccountItem />
        
                            <p className={cx('more-btn')}>Xem tất cả</p>
                        </>
                    ) : (
                        <p className={cx('empty')}>Những tài khoản bạn follow sẽ xuất hiện tại đây</p>
                    )}
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
