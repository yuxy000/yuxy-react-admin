import { Component } from 'react';
import { connect } from 'react-redux';

class AuthWidget extends Component {
    render() {
        
        const { auth } = this.props;
        console.log('====================================');
        console.log('this.props.auth.data', auth);
        console.log('====================================');
        return this.props.children(auth.data || {});
    }
}

const mapStateToProps = state => {
    const { auth = {data:{}} } = state.httpData;
    return {auth};
};

export default connect(mapStateToProps)(AuthWidget);