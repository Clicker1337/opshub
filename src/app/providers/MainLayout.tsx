import {
  CloudServerOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  SettingOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: <Link to="/">Dashboard</Link> },
  {
    key: '/installations',
    icon: <CloudServerOutlined />,
    label: <Link to="/installations">Installations</Link>,
  },
  { key: '/users', icon: <TeamOutlined />, label: <Link to="/users">Users</Link> },
  { key: '/jobs', icon: <ThunderboltOutlined />, label: <Link to="/jobs">Jobs</Link> },
  { key: '/audit', icon: <FileSearchOutlined />, label: <Link to="/audit">Audit Log</Link> },
  { key: '/settings', icon: <SettingOutlined />, label: <Link to="/settings">Settings</Link> },
];

const MainLayout = () => {
  const { pathname } = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="dark" breakpoint="lg" collapsible>
        <div
          style={{
            color: '#fff',
            textAlign: 'center',
            padding: '16px 0',
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          OpsHub
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]} items={menuItems} />
      </Sider>

      <Layout>
        <Header style={{ background: colorBgContainer, paddingLeft: 24 }}>
          <span style={{ fontSize: 16, fontWeight: 500 }}>VK WorkSpace Admin</span>
        </Header>

        <Content style={{ margin: 24, padding: 24, background: colorBgContainer, borderRadius: 8 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
