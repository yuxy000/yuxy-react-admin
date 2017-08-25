import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';
import Page from '../components/Page';

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
                <div>
                    <Route path="/" component={Page} />
                    <Route path="/app" component={App} />
                </div>
                
            </Router>
        );

    }

}

export default CRouter;