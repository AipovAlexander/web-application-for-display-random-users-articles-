import { Input, Button, Layout, Typography, Form } from 'antd';
import { SettingOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { AppRoutesPath } from '../router/types';
import updateMetaData from '../utils/create-meta';

const { Title } = Typography;
const { TextArea } = Input;

interface SettingsFormData {
  profilePicture: string;
  username: string;
  bio: string;
  email: string;
  newPassword: string;
}

const SettingsPage: React.FC = () => {
  const { control, handleSubmit } = useForm<SettingsFormData>();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
  };

  const dispatch = useAppDispatch();
  updateMetaData({
    title: 'Settings | News App',
    description: 'Settings page',
  });

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
              <UserOutlined /> <Link to={AppRoutesPath.PROFILE}>Profile</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <SettingOutlined />
              <Link to={AppRoutesPath.SETTINGS}>Settings</Link>
            </>
          ),
        },
      ])
    );
  }, []);

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '50px',
      }}
    >
      <Title level={3}>Your Settings</Title>
      <Form
        size="large"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item>
          <Controller
            name="profilePicture"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="URL of profile picture" />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Username" />}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <TextArea {...field} placeholder="Short bio about you" rows={4} />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input {...field} type="password" placeholder="New Password" />
            )}
          />
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Update Settings
          </Button>
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-start' }}>
          <Button danger>Or click here to logout</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SettingsPage;