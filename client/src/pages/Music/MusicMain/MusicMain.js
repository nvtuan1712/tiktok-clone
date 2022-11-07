import classNames from 'classnames/bind';
// import { Lock } from '~/components/Icons';

//Thư viện internor sau(thư viện bên trong dự án)
import styles from './MusicMain.module.scss';
import MusicMainVideo from './MusicMainVideo';

const cx = classNames.bind(styles);

function MusicMain({ onClick }) {
    return (
        <div className={cx('content-main')}>
            <MusicMainVideo onClick={onClick}/>
        </div>
    );
}

export default MusicMain;
