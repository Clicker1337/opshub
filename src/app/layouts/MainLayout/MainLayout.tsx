import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { APP_NAME, APP_SUBTITLE } from '@/shared/config/constants';

import styles from './MainLayout.module.css';
import { NAV_ITEMS } from './navItems';

const { Header, Sider, Content } = Layout;

export const MainLayout = () => {
  const { pathname } = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = NAV_ITEMS.map((item) => ({
    key: item.path,
    icon: item.icon,
    label: <Link to={item.path}>{item.label}</Link>,
  }));

  return (
    <Layout className={styles.layout}>
      <Sider theme="dark" breakpoint="lg" collapsible>
        <div className={styles.logo}>{APP_NAME}</div>
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]} items={menuItems} />
      </Sider>

      <Layout>
        <Header className={styles.header} style={{ background: colorBgContainer }}>
          <span className={styles.headerTitle}>{APP_SUBTITLE}</span>
        </Header>

        <Content className={styles.content} style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
