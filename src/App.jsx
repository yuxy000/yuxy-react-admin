import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';

import {receiveData} from './actions';

import './styles/index.scss';

import HeaderCustom from './Containers/HeaderCustom';
import SiderCustom from './Containers/SiderCustom';
import ContentCustom from './Containers/ContentCustom';
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

    console.log('====================================');
    console.log(this.props.auth);
    console.log('====================================');

    const { auth, router } = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle} user={auth.data || {}} />
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
