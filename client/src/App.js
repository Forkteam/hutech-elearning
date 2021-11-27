import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Auth } from './components/auth';
import { Error } from './components/error';
import { Landing } from './components/Landing';
import { AuthContextProvider } from './context/auth-context';
import { ProtectedRoute } from './components/routings/protected-route';
import { Courses } from './views/courses';

function App() {
  return (
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
          <Route path="/:somestring" component={Error} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
