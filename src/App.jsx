import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';

import {receiveData} from './actions';

import './styles/index.less';

import HeaderCustom from './containers/HeaderCustom';
import SiderCustom from './containers/SiderCustom';
import ContentCustom from './containers/ContentCustom';
const { Footer } = Layout;

class App extends Component {

  state = {
    collapsed: false,
  };

  componentWillMount() {
    const { receiveData } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    user && receiveData(user, 'auth');

    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
    }
  }

  getClientWidth = () => {  // 获取当前浏览器宽度并设置responsive管理响应式
    const { receiveData } = this.props;
    const clientWidth = document.body.clientWidth;
    console.log(clientWidth);

    receiveData({isMobile: clientWidth <= 992}, 'responsive');
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    console.log('App.props:', this.props);
    console.log(this.props.responsive);
    const { auth, history, responsive } = this.props;
    return (
      <Layout className="ant-layout-has-sider">
        {!responsive.data.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed}/>}
        <Layout>
          <HeaderCustom toggle={this.toggle} user={auth.data || {}} history={history} path={this.props.location.pathname}/>
          <ContentCustom {...this.props}/>
          <Footer style={{ textAlign: 'center' }}>
            Yuxy-React-Admin &copy;2017 Created by yuxy
          </Footer>
        </Layout>
        {
          responsive.data.isMobile && (
            <style>
            {`
              #root {
                height: auto;
              }
            `}
            </style>
          )
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
  return { auth, responsive };
}

const mapDistchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
})

export default connect(mapStateToProps, mapDistchToProps)(App);
