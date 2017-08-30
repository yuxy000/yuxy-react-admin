import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from '../components/dashboard/Dashboard';
import Buttons from '../components/ui/Buttons';
import Icons from '../components/ui/Icons';
import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import TabsCustom from '../components/ui/Tabs';
import Banners from '../components/ui/banners';


const { Content } = Layout;

class ContentCustom extends React.Component {
    render() {
        return (
            <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                <Switch>
                    
                    <Route path="/app/ui/buttons" component={Buttons} />
                    <Route path="/app/ui/icons" component={Icons} />
                    <Route path="/app/ui/spins" component={Spins} />
                    <Route path="/app/ui/modals" component={Modals} />
                    <Route path="/app/ui/notifications" component={Notifications} />
                    <Route path="/app/ui/tabs" component={TabsCustom} />
                    <Route path="/app/ui/banners" component={Banners} />
                    <Route component={Dashboard} />
                </Switch>
               
            </Content>
        );
    }
}

export default ContentCustom;