import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be~c5_300x300.webp?x-expires=1662631200&x-signature=hT2Evz9bo1GouXeqNKyQreAbV98%3D' alt='Hoa'/>

            <div className={cx('info')} >
                <h4 className={cx('name')}>
                    <span>Tran Thi Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>TranThiHoa</span>
            </div>
        </div>
     );
}

export default AccountItem;