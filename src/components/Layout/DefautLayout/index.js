import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from './DefautLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefautLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefautLayout;