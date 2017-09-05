import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import App from '../App';
import Login from '../components/pages/Login';

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
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                </Switch>
                    
                    

                
            </Router>
        );

    }

}

export default CRouter;