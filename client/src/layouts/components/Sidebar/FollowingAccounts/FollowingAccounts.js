// import PropTypes from 'prop-types';
import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import FollowingAccountItem from './FollowingAccountItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function FollowingAccounts() {
    const currentUser = true;
    const [followingAccounts, setFollowingAccount] = useState([]);
    const [addAndSubtractArr, setAddAndSubtractAddArr] = useState(5);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        try {
            //
            const configHeader = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    IdAccount: `Bearer ${localStorage.getItem('idAccount')}`,
                },
            };

            axios
                .get('http://localhost:5000/api/users/get-follow-user', configHeader)
                .then((result) => {
                    setFollowingAccount(result.data[0].fllowing);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleAddArr = () => {
        setAddAndSubtractAddArr(followingAccounts.length);
        setHide(!hide);
    };

    const handleSubTractArr = () => {
        setAddAndSubtractAddArr(5);
        setHide(!hide);
    };

    return (
        <>
            {currentUser ? (
                <div className={cx('wrapper')}>
                    <p className={cx('label')}>Các tài khoản đang follow</p>
                    {followingAccounts.length > 0 ? (
                        <>
                            {followingAccounts.slice(0, addAndSubtractArr).map((account, index) => {
                                return <FollowingAccountItem key={index} account={account} />;
                            })}

                            <>
                                {hide ? (
                                    <p className={cx('more-btn')} onClick={handleSubTractArr}>
                                        Ẩn bớt
                                    </p>
                                ) : (
                                    <p className={cx('more-btn')} onClick={handleAddArr}>
                                        Xem tất cả
                                    </p>
                                )}
                            </>
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

FollowingAccounts.propTypes = {};

export default FollowingAccounts;
