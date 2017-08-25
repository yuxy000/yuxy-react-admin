import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {receiveData} from './actions'
class App extends Component {

  state = {
    collapsed: false,
  };

  componentWillMount() {
    const { receiveData } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    user && receiveData(user, 'auth');
  }
  render() {

    console.log('====================================');
    console.log(this.props.auth);
    console.log('====================================');

    const { auth, router } = this.props;

    return (
      <div className="App">
        
          To get started, edit <code>src/App.js</code> and save to reload.
      </div>
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
