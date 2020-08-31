// reducers.js
// 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'
// 默认值
import defaultState from './state.js'
// 一个reducer就是一个函数
const loginState = (state = defaultState.loginState, action) => {
    // console
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_LOGIN_STATE':
            return action.data;
        default:
            return state
    }
};

const infoList = (state = defaultState.infoList, action) => {
    switch (action.type) {
        case 'SET_INFO_LIST':
            return action.data;
        default:
            return state
    }
};

// 导出所有reducera
export default combineReducers({
    loginState,infoList
})