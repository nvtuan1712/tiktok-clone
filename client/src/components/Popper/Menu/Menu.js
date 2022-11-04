import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderLanguage from './Header';
import { useState } from 'react';
import config from '~/config';
// import { useRef } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, setState, state }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];


    //Hàm xử lý render ra các item của menu phần header
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            const isShow = !!item.show;
            const isSeparate = !!item.separate;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }

                        if (isShow) {
                            const modal = document.querySelector('#modal-keyboard');
                            const content = document.querySelector('#content-container');
                            content.style.visibility = 'visible';
                            modal.style.visibility = 'visible';
                        } else {
                        }

                        if(isSeparate) {
                            localStorage.removeItem('accessToken')
                            localStorage.removeItem('idAccount')
                            localStorage.removeItem('nickName')
                            window.location.href = config.routes.home
                            setState(false)
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    //Hàm xử lý khi click quay lại từ menu phân cấp
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    //Hàm xử lý render ra menu phần header
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <HeaderLanguage title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    //Hàm xử lý reset khi ẩn menu
    const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <>
            <Tippy
                interactive
                delay={[0, 800]}
                offset={state ? [12, 12] : [12, 7]}
                hideOnClick={hideOnClick}
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetMenu}
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
