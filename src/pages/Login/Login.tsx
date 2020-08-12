import React from "react";
import "./Login.less";
import {Form, Input, Button, Checkbox} from 'antd';

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            layout: {
                labelCol: {span: 8}, wrapperCol: {span: 16},
            },
            tailLayout: {
                wrapperCol: {offset: 8, span: 16},

            }
        }
    }

    componentDidMount(): void {
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        const {history}=this.props;
        /**
         * TODO 存cookie
         * **/

        history.push("/")
    };
    onFinishFailed = (values: any) => {
        console.log('Failed:', values);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {layout, tailLayout} = this.state;
        return (
            <div className={"bg"}>
                <div className="LoginBox">
                    <div className="left">
                        <img src={require("../../assets/images/logo.png")} alt=""/>
                    </div>
                    <div className="right">
                        <Form {...layout} name="basic" className={'forms'}
                              initialValues={{remember: true}}
                              onFinish={this.onFinish.bind(this)}
                              onFinishFailed={this.onFinishFailed.bind(this)}
                        >
                            <Form.Item label="账号" name="username" rules={[{required: true, message: '请输入账号!'}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码!'}]}>
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit"> 登录 </Button>
                                <span className={"forget"}>忘记密码</span>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;