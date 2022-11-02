import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './SuggestedAccountItem';
import { useEffect, useState } from 'react';
import axios from 'axios';


const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [users, setUsers] = useState({})
    const [time, setTime] = useState(false)

    useEffect(() => {
        try {
            //get list người dùng đề xuất
            axios.get('http://localhost:5000/api/users/get-list-suggest')
            .then((result) => {
                setUsers(result)
            }).catch((err) => {
                console.log(err);
            });

            setTimeout(() => {
                setTime(true)
            }, 500)
        } catch (error) {
            console.log(error);
        }
    },[])


    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            { time && <AccountItem users={users}/> }
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
