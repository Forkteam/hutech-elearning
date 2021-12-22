import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/layout/error';
import Landing from './components/layout/landing';
import ProtectedRoute from './components/routings/protected-route';
import AuthContextProvider from './contexts/auth-context';
import Auth from './views/auth';
import Courses from './views/courses';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import DetailForm from './views/detail-document';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
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
            <Route
              exact
              path="/detail-document"  component={DetailForm}
            />
            <ProtectedRoute exact path="/courses" component={Courses} />
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
