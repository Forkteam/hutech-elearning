import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/layouts/error';
import Landing from './components/layouts/landing';
import ProtectedRoute from './components/routings/protected-route';
import AuthContextProvider from './contexts/auth-context';
import FileContextProvider from './contexts/file-context';
import { theme } from './theme';
import Admins from './views/admins';
import Auth from './views/auth';
import Industries from './views/industries';
import LectureDetail from './views/lecture-detail';
import Lectures from './views/lectures';
import News from './views/news';
import Personal from './views/personal';
import Students from './views/students';
import Subjects from './views/subjects';
import Support from './views/support';
import UserSubjects from './views/user-subjects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AuthContextProvider>
          <FileContextProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                  exact
                  path="/login"
                  render={(props) => <Auth {...props} authRoute="login" />}
                />
                <Route
                  exact
                  path="/register"
                  render={(props) => <Auth {...props} authRoute="register" />}
                />
                <Route
                  exact
                  path="/activate-account"
                  render={(props) => <Auth {...props} authRoute="activate" />}
                />
                <Route
                  exact
                  path="/reset-password"
                  render={(props) => <Auth {...props} authRoute="reset" />}
                />
                <ProtectedRoute
                  exact
                  path="/industries"
                  component={Industries}
                />
                <ProtectedRoute exact path="/subjects" component={Subjects} />
                <ProtectedRoute
                  exact
                  path="/user-subjects"
                  component={UserSubjects}
                />
                <ProtectedRoute
                  exact
                  path="/subjects/:id"
                  component={Lectures}
                />
                <ProtectedRoute
                  exact
                  path="/subjects/lectures/:id"
                  component={LectureDetail}
                />
                <ProtectedRoute exact path="/students" component={Students} />
                <ProtectedRoute exact path="/admins" component={Admins} />
                <ProtectedRoute exact path="/news" component={News} />
                <ProtectedRoute exact path="/personal" component={Personal} />
                <ProtectedRoute exact path="/support" component={Support} />
                <Route path="/:someString" component={Error} />
              </Switch>
            </Router>
          </FileContextProvider>
        </AuthContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
