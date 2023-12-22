import updateMetaData from '../utils/create-meta';

const NotFoundPage = () => {
  updateMetaData({ title: 'ERROR | News App', description: 'Error page' });
  return <h1>Not Found Page</h1>;
};

export default NotFoundPage;