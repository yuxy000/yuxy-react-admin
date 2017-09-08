import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NoFound';

class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httData;
        if(!auth || !auth.data.permissions.includes(permission)) {
            window.location.hash = '/404';
        }
        return component;
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/" component={App} />
                    
                </Switch>  
            </Router>
        );

    }

}

export default CRouter;