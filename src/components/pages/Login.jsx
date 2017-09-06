import React, { Component } from 'react';
import { Form, Input, Button, Icon,Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '../../actions';

const FormItem = Form.Item;

class Login extends Component {

    componentWillMount() {
        const { receiveData } = this.props;
        receiveData(null, 'auth');
    }

    componentWillReceiveProps(nextProps) {
        console.log('====================================');
        console.log('nextProps', nextProps);
        console.log('====================================');

        const { auth: nextAuth = {} } = nextProps;
        const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) {
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('====================================');
        console.log(this.props, '**************************');
        console.log('====================================');

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { fetchData } = this.props;
                if (values.userName === 'admin' && values.password === 'admin') {
                    fetchData({funcName: 'admin', stateName: 'auth'});
                }
                if (values.userName === 'guest' && values.password === 'guest') {
                    fetchData({funcName: 'guest', stateName: 'auth'});
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>

                    <Form onSubmit={this.handleSubmit} style={{width: '100%'}}>
                        <FormItem>
                            {getFieldDecorator('userName',{
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state.httpData;
    return { auth };
}

const mapDispatchToProps = (dispatch) => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));