import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import { connect } from 'react-redux';

import { queryString } from '../utils';
import { gitOauthToken, gitOauthInfo } from '../axios';
import avatar from '../styles/imgs/b1.jpg';

import SiderCustom from '../containers/SiderCustom';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        user: '',
        visible: false,
    };

    componentDidMount() {
        const QueryString = queryString();
        console.log('====================================');
        console.log('queryString: ', QueryString);
        console.log('====================================');

        const _user = JSON.stringify(localStorage.getItem('user')) || '测试';
        if (!_user && QueryString.hasOwnProperty('code')) {
            gitOauthToken(QueryString.code).then(res => {
                gitOauthInfo(res.access_token).then(info => {
                    console.log('====================================');
                    console.log('user:', info);
                    console.log('====================================');
                    this.setState({
                        user: info,
                    });
                    localStorage.setItem('user', JSON.stringify(info));
                });
            });
        } else {
            this.setState({
                user: _user,
            });
        }

        
    }

    menuClick = (e) => {
        if(e.key === 'logout') {
            this.logout();
        }
    };

    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
    };

    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };

    render() {
        console.log('====================================');
        console.log('this.props', this.props);
        console.log('====================================');
        const { responsive, path } = this.props;
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme">
                {
                    responsive.data.isMobile ? (
                        <Popover
                            content={<SiderCustom path={path} popoverHide={this.popoverHide}/>}
                            trigger="click"
                            placement="bottomLeft"
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange}
                        >
                            <Icon type="bars" className="trigger custom-trigger" />
                        </Popover>
                    ) : (
                        <Icon
                            className="trigger custom-trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    )
                }
                
                <Menu
                    mode="horizontal"
                    style={{lineHeight: '64px', float: 'right'}}
                    onClick={this.menuClick}
                >
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>

                    <SubMenu title={<span className="avatar"><img src={avatar} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - yuxy</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout">退出</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                        <Menu.Item key="setting:3">个人设置</Menu.Item>
                        <Menu.Item key="setting:4">系统设置</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
            </Header>
        );
    }
}

const mapStateToProps = (state) => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
}

export default connect(mapStateToProps)(HeaderCustom);