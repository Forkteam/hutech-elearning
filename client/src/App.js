import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SimpleAccordian from './views/accordian';
import SimpleNews from './views/news';
import Error from './components/layout/error';
import Landing from './components/layout/landing';
import ProtectedRoute from './components/routings/protected-route';
import AuthContextProvider from './contexts/auth-context';
import Auth from './views/auth';
import Courses from './views/courses';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

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
            <ProtectedRoute exact path="/courses" component={Courses} />
<<<<<<< HEAD
            <ProtectedRoute exact path="/news" component={SimpleNews} />
            <Route path="/accordian" component={SimpleAccordian} />
=======
            <ProtectedRoute exact path="/accordian" component={SimpleAccordian} />
>>>>>>> c0e2fea82f0f79c91b6535431767804981172290
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
