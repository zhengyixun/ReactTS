import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.css'

import App from './App';
import Home from "./pages/Home/Home"
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// @ts-ignore
import { Provider } from 'react-redux';
import store from './store/index.js'

//开发环境使用mock数据
if (process.env.NODE_ENV === "development") {
    console.error("开发环境");
    require("./mock/mock")
}
//路由
const Routes = () => {
    return (
    <Provider store={store}>
        <BrowserRouter>
            {/*<React.StrictMode>*/}
                <Switch>
                    <Route path='/Home' component={Home}/>
                    <Route path='/' component={App}/>
                </Switch>
            {/*</React.StrictMode>*/}
        </BrowserRouter>
        {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
    </Provider>
)
};

ReactDOM.render(Routes(), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
