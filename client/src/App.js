import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/layouts/error';
import Landing from './components/layouts/landing';
import ProtectedRoute from './components/routings/protected-route';
import AuthContextProvider from './contexts/auth-context';
import { theme } from './theme';
import SimpleAccordion from './views/accordion';
import Auth from './views/auth';
import Subjects from './views/subjects';
import DetailForm from './views/detail-document';
import News from './views/news';
import Industries from './views/industries';
import Lectures from './views/lectures';
import Support from './views/support';

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
            <ProtectedRoute exact path="/industries" component={Industries} />
            <ProtectedRoute exact path="/subjects" component={Subjects} />
            <ProtectedRoute
              exact
              path="/detail-document"
              component={DetailForm}
            />
            <ProtectedRoute
              exact
              path="/lectures"
              component={Lectures}
            />
            <ProtectedRoute exact path="/news" component={News} />
            <ProtectedRoute
              exact
              path="/accordion"
              component={SimpleAccordion}
            />
            <ProtectedRoute
              exact
              path="/support"
              component={Support}
            />
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
