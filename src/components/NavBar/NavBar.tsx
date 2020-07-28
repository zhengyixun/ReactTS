import React from "react";
import "./NavBar.less";
import {Button} from 'antd';
import Logo from "./image/logo.png"

class NavBar extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="NavBar">
                <div className="con">
                    <img src={Logo} alt=""/>
                    <div className="btn">门户首页</div>
                    <div className="btn">量籽汇票</div>

                    <div className="right">
                        <Button className="login">登录</Button>
                        <Button>注册</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;