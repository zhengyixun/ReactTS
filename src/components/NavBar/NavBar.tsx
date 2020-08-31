import React from "react";
import "./NavBar.less";
import {Button, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {getCookie, delCookie} from "../../utils/utils";
import Logo from "./image/logo.png"
import { connect } from 'react-redux';
// 引入action
import { setLoginState } from "../../store/action"

class NavBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            account: ""  //登陆账号
        }
    }

    componentDidMount(): void {
        let token = getCookie('token');
        if (token) {
            this.setState({
                account: getCookie("account")
            })
        }
        console.log('this.props',this.props)
    }

    //登录
    Login() {
        let {history} = this.props;
        history.push("/Login");
    }

    //退出登录
    LoginOut() {
        const {history} = this.props;
        delCookie('token');
        history.push("/login");
    };
    //路由跳转
    LocationTo(val:any){
        const {history} = this.props;
        history.push({
            pathname:`/${val}`,
            query:{
                id:1
            }
        })
    };
    toIndex(){
      const {history} = this.props;
      history.push("/")
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let { account} = this.state;
        let { loginState } = this.props;
        const menu = (
            <Menu>
                <Menu.Item key="0" onClick={this.LocationTo.bind(this,'account')}>
                    <span>管理账户</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={this.LoginOut.bind(this)}>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="NavBar">
                <div className="con">
                    <img src={Logo} alt=""/>
                    {loginState.toString()}
                    <div className="btn" onClick={this.toIndex.bind(this)}>首页</div>
                    {
                        !loginState && <div className="right">
                            <Button className="login" onClick={this.Login.bind(this)}>登录</Button>
                            <Button>注册</Button>
                        </div>
                    }
                    {
                        loginState && <div className="right">
                            <Dropdown overlay={menu} className={'dropdown'}>
                                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    欢迎！ {account} <DownOutlined/>
                                </span>
                            </Dropdown>,
                        </div>
                    }

                </div>
            </div>
        );
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state:any) => {
    return {
        loginState: state.loginState
    }
}
export default connect(mapStateToProps)(NavBar);