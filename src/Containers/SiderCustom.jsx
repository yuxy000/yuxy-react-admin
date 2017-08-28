import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Sider }  = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };

    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('====================================');
        console.log(nextProps, 11111111111111);
        console.log('====================================');
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
    }

    setMenuOpen = (props) => {
        const { path } = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };

    onCollapse = (collapsed) => {
        console.log('====================================');
        console.log(collapsed);
        console.log('====================================');
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline'
        });
    };

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
    };

    openMenu = v => {
        console.log('====================================');
        console.log(v);
        console.log('====================================');
        this.setState({
            openKey: v[v.length - 1]
        })
    }

    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}
            >
                <div className='logo' />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="/app/dashboard/index">
                        <Link to="/app/dashboard/index">
                            <Icon type="mobile" /> <span className="nav-next">首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="/app/ui" title={<span><Icon type="scan" /><span className="mav-text">UI</span></span>} >
                        <Menu.Item key="/app/ui/buttons"><Link to='/app/ui/buttons'>按钮</Link></Menu.Item>
                        <Menu.Item key="/app/ui/icons"><Link to='/app/ui/icons'>图标</Link></Menu.Item>
                    </SubMenu>
                </Menu>    
            </Sider>
        );
    }
}

export default SiderCustom;