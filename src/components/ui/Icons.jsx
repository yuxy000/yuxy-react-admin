import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';

import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';
class Icons extends Component {
    state = {
        user: ''
    };

    render() {
        return (
            <div className="gutter-example button-demo">
            <BreadcrumbCustom first="UI" second="ICONS"/>
            ICON
        </div>
        );
    }
}

export default Icons;