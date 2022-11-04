import classNames from 'classnames/bind';
import styles from './SuggestedAccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import axios from 'axios';

const cx = classNames.bind(styles);

function AccountPreview({ user }) {

    const handleFollow = async () => {
        try {
            //
            const configHeader = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    IdAccount: `Bearer ${localStorage.getItem('idAccount')}`,
                    IdUser: `Bearer ${user.id}`
                }
            }

            const response = await axios.post('http://localhost:5000/api/users/follow-user', configHeader)    
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663660800&x-signature=oxiMe9kkqfLoIDJkbuH6%2Bl6FXVw%3D"
                    alt="avatar"
                />
                <Button primary className={cx('follow-btn')} onClick={handleFollow}>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user.nickname}</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>{user.nickname}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{user.follower_count} </strong>
                    <label className={cx('label')}>Followers</label>
                    <strong className={cx('value')}>{user.heart_count} </strong>
                    <label className={cx('label')}>Thích </label>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
