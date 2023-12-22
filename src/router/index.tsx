import { Routes, Route } from 'react-router';
import { AppRoutesPath } from './types';
import MainPage from '../pages/main-page';
import ParagraphDetails from '../pages/paragraph-details';
import Profile from '../pages/profile/profile';
import NotFoundPage from '../pages/not-found-page';
import LayoutApp from '../components/layout';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import SettingsPage from '../pages/settings';
import NewPost from '../pages/new-post/new-post';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutesPath.MAIN} element={<LayoutApp />}>
        <Route index element={<MainPage />} />
        <Route
          path={AppRoutesPath.PARAGRAPH_DETAILS}
          element={<ParagraphDetails />}
        />
        <Route path={AppRoutesPath.PROFILE} element={<Profile />} />
        <Route path={AppRoutesPath.SIGN_IN} element={<SignIn />} />
        <Route path={AppRoutesPath.SIGN_UP} element={<SignUp />} />
        <Route path={AppRoutesPath.SETTINGS} element={<SettingsPage />} />
        <Route path={AppRoutesPath.NEW_POST} element={<NewPost />} />
        <Route path={AppRoutesPath.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;