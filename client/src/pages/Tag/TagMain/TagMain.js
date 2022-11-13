import classNames from 'classnames/bind';
// import { Lock } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './TagMain.module.scss';
import TagMainVideo from './TagMainVideo';

const cx = classNames.bind(styles);

function TagMain({ data }) {
    return (
        <div className={cx('content-main')}>
            <TagMainVideo metadata={data}/>
        </div>
    );
}

export default TagMain;
