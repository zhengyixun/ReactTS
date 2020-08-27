import React from "react";
import "./Login.less";
import {setCookie} from "../../utils/utils";
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
            },
            user:{
                account:"",password:""
            }
        }
    }

    componentDidMount(): void {
    }

    onFinish = (values: any) => {
        console.log('Success:', values,this.state.user);
        const {user} = this.state;
        const {history}=this.props;
        /**
         * TODO 存cookie
         * **/

        setCookie('token','1asas');
        setCookie('account',user.account);
        history.push("/")
    };
    onFinishFailed = (values: any) => {
        console.log('Failed:', values);
    };
    //input的value值改变
    valueChange(name:any,e:any){
        let d = Object.assign({},this.state.user);
        d[name] = e.target.value;
        console.log(d);
        this.setState({user:d});
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {layout, tailLayout,user } = this.state;
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
                                <Input value={user.account} onChange={this.valueChange.bind(this,'account')}/>
                            </Form.Item>

                            <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码!'}]}>
                                <Input.Password  value={user.password} onChange={this.valueChange.bind(this,'password')}/>
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