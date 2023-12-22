import { Button, Form, Input, Typography, Layout } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { AppRoutesPath } from '../router/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store/store-hooks';
import { useEffect } from 'react';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';

const { Title } = Typography;

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setCurrentPath([
        {
          title: (
            <>
              <HomeOutlined />
              <Link to={AppRoutesPath.MAIN}>Home</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <UserOutlined />
              <Link to={AppRoutesPath.SIGN_IN}>Sign In</Link>
            </>
          ),
        },
      ])
    );
  }, []);

  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      username: e.target.value,
    });
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '50px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={3}>Sign In</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to={AppRoutesPath.SIGN_UP}
        >
          Need an account?
        </Link>
      </div>
      <Form
        name="basic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
      >
        <Form.Item>
          <Input
            onChange={usernameChange}
            value={credentials.username}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Input.Password
            onChange={passwordChange}
            value={credentials.password}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignIn;