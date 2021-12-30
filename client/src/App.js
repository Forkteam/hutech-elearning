import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/layouts/error';
import Landing from './components/layouts/landing';
import ProtectedRoute from './components/routings/protected-route';
import AuthContextProvider from './contexts/auth-context';
import { theme } from './theme';
import Auth from './views/auth';
import Subjects from './views/subjects';
import DetailForm from './views/detail-document';
// import SimpleAccordion from './views/accordion';
import News from './views/news';
import Industries from './views/industries';
import Lectures from './views/lectures';
import Admins from './views/admins';
import Students from './views/students';
import Support from './views/support';
import Personal from './views/personal';

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
            <ProtectedRoute exact path="/subjects/:id" component={Lectures} />
            <ProtectedRoute exact path="/students" component={Students} />
            <ProtectedRoute exact path="/admins" component={Admins} />
            
            <ProtectedRoute
              exact
              path="/detail-document"
              component={DetailForm}
            />
            <ProtectedRoute exact path="/news" component={News} />
            <ProtectedRoute exact path="/personal" component={Personal} />
            <ProtectedRoute
              exact
              path="/support"
              component={Support}
            />
            {/* <ProtectedRoute
              exact
              path="/accordion"
              component={SimpleAccordion}
            /> */}
            <Route path="/:someString" component={Error} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
