import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from '../components/dashboard/Dashboard';
import Buttons from '../components/ui/Buttons';
import Icons from '../components/ui/Icons';
import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import TabsCustom from '../components/ui/Tabs';
import Banners from '../components/ui/banners';
import Wysiwyg from '../components/ui/Wysiwyg';
import Drags from '../components/ui/Draggable';
import Gallery from '../components/ui/Gallery';

import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';

import BasicTables from '../components/tables/BasicTables';
import AdvancedTables from '../components/tables/AdvancedTables';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import SongTable from '../components/tables/SongTable';

import BasicForm from '../components/forms/BasicForm';

import Echarts from '../components/charts/Echarts';

import BasicAuth from '../components/auth/BasicAuth';
import RouterEnter from '../components/auth/RouterEnter';

const { Content } = Layout;

class ContentCustom extends React.Component {

    requireAuth = (permission, component) => {
        console.log('====================================');
        console.log('requireAuth', this.props);
        console.log('====================================');
        const { auth } = this.props;
        
        if(!auth || !auth.data.permissions || !auth.data.permissions.includes(permission)) {
            this.props.history.replace('/404');
        }

        return component;
    }

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
                    <Route path="/app/ui/wysiwyg" component={Wysiwyg} />
                    <Route path="/app/ui/drags" component={Drags} />
                    <Route path="/app/ui/gallery" component={Gallery} />
                    <Route path="/app/animation/basicAnimations" component={BasicAnimations} />
                    <Route path="/app/animation/exampleAnimations" component={ExampleAnimations} />
                    <Route path="/app/table/basicTable" component={BasicTables} />
                    <Route path="/app/table/advancedTable" component={AdvancedTables} />
                    <Route path="/app/table/asynchronousTable" component={AsynchronousTable} />
                    <Route path="/app/table/songTable" component={SongTable} />
                    <Route path="/app/form/basicForm" component={BasicForm} />
                    <Route path="/app/chart/echarts" component={Echarts} />
                    <Route path="/app/auth/basic" component={BasicAuth} />
                    <Route path="/app/auth/routerEnter" component={() => this.requireAuth('auth/testPage', <RouterEnter />)} />
                    <Route component={Dashboard} />
                </Switch>
               
            </Content>
        );
    }
}

export default ContentCustom;