import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ResetPassword from './pages/resetpassword/ResetPassword';
import Home from './pages/home/Home';
import NewBet from './pages/newbet/NewBet';
import Account from './pages/account/Account';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/recover" component={ResetPassword} />
                <Route path="/account" component={Account} />
                <Route exact path="/" component={Home} />
                <Route path="/bet" component={NewBet} />
            </Switch>
        </Router>
    );
};

export default Routes;