import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './views/Dashboard/Dashboard';
import LandingView from './views/LandingView/LandingView';
import LoginView from './views/LoginView/LoginView';
import SignUpView from './views/SignUpView/SignUpView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './views/ForgotPasswordView/ForgotPassword';
import UpdateProfileView from './views/UpdateProfileView/UpdateProfileView';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingView} />
            <Route path='/login' component={LoginView} />
            <Route path='/signUp' component={SignUpView} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfileView} />
          </Switch>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
