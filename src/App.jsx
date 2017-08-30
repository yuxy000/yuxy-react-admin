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
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {


    const { auth, history } = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle} user={auth.data || {}} history={history}/>
          <ContentCustom />
          <Footer style={{ textAlign: 'center' }}>
            Yuxy-React-Admin &copy;2017 Created by yuxy
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { auth = {data: {}} } = state.httpData;
  return { auth };
}

const mapDistchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
})

export default connect(mapStateToProps, mapDistchToProps)(App);
