import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from '../components/dashboard/Dashboard';
import Buttons from '../components/ui/Buttons';
import Icons from '../components/ui/Icons';


const { Content } = Layout;

class ContentCustom extends React.Component {
    render() {
        return (
            <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                <Switch>
                    <Route path="/app/dashboard/index" component={Dashboard} />
                    <Route path="/app/ui/buttons" component={Buttons} />
                    <Route path="/app/ui/Icons" component={Icons} />
                    <Redirect from="/" to="/app/dashboard/index" />
                </Switch>
               
            </Content>
        );
    }
}

export default ContentCustom;