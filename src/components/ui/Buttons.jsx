import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';

import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';

class Buttons extends Component {

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="按钮"/>

                Buttons
            </div>
        );
    }
}

export default Buttons;