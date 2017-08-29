import React, { Component } from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';

const FormItem = Form.Item;

class LoginPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('====================================');
        console.log(this.props, '**************************');
        console.log('====================================');

        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;

        if (n === '123' && p === '123') {
            notification.close('login');
            this.props.history.push('/app/dashboard/index');
        } else {
            this.openNotificationWithIcon('info');
        }
    }
    openNotificationWithIcon = (type) => {
        return notification[type]({
            message: '用户名&密码',
            description: '都是：123',
            key: 'login',
            duration: 6,
            icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />, 
        });
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login-page-wrap">
                <div className="box">
                    <p>Welcome to the yuxy-react-admin</p>
                    <div className="login-wrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username',{
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="login-btn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;