import { Menu, Button, Typography, Layout } from 'antd';
import { Link } from 'react-router-dom';
import ThemeSwitch from './theme-switch';

const AppHeader = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Menu mode="horizontal">
          <Typography
            style={{
              margin: '0 0 0 10px',
              fontSize: '26px',
            }}
          >
            Logo
          </Typography>
        </Menu>

        <Menu
          mode="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'right',
            flex: 1,
          }}
        >
          <Menu.Item key="signup">
            <Button type="primary">
              <Link to="/home">To Home Page</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="signin">
            <Button>
              <Link to="/signin">Sign In</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="sinup">
            <Button>
              <Link to="/signin">Sign Up</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="themeSwitch">
            <ThemeSwitch />
          </Menu.Item>
        </Menu>
      </div>
    </Layout>
  );
};

export default AppHeader;
