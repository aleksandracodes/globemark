import Logo from './Logo';
import AppNav from './AppNav';
import Footer from './Footer';
import styles from './Sidebar.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

import { HiXMark } from 'react-icons/hi2';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <aside className={`${isSidebarOpen ? styles['sidebar-open'] : ''}`}>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <AppNav />
        <Outlet />
        <Footer />
        <button
          className={styles['sidebar-icon']}
          onClick={() => {
            setIsSidebarOpen(false);
            navigate('/app/cities');
          }}
        >
          <HiXMark />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
