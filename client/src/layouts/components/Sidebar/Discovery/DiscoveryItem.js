//Thư viện externor trước(thư viện bên ngoài)
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//Thư viện internor sau(thư viên bên trong dự án)
import styles from './Discovery.module.scss';
import config from '~/config';
import { Tag, Music } from '../../../../components/Icons';


const cx = classNames.bind(styles);

function DiscoveryItem({ text, index, path}) {
    return (
        <Link
        key={index} 
        className={cx('discovery-item')} 
        to={path === 'tag' ? config.routes.tag : config.routes.music} 
        >
            <div className={cx('discovery-item-container')}>
                {path === 'tag' ? <Tag/> : <Music/>}
                <p className={cx('discovery-item-text')}>{text}</p>     
            </div>
        </Link>
    );
}

// DiscoveryItem.propTypes = {};

export default DiscoveryItem;
