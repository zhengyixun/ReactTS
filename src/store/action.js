// actions.js

// // action也是函数
// export const setLoginState = (data) => {
//     console.log('setLoginState',data)
//     return (dispatch, getState) => {
//         console.log('setLaaaaaaaaaaaaaaaaaaaaaaaaaaaa',dispatch)
//         dispatch({ type: 'SET_LOGIN_STATE', data: data })
//     }
// }
export function setLoginState(data) {
    console.log('setLoginState',data)
    return (dispatch, getState) => {
        console.log('setLaaaaaaaaaaaaaaaaaaaaaaaaaaaa',dispatch)
        dispatch({ type: 'SET_LOGIN_STATE', data: data })
    }
}
export function setInfoList (data) {
    return (dispatch, getState) => {
        // 异步请求
        setTimeout(()=>{
            dispatch({ type: 'SET_INFO_LIST', data: [
                    {data:1},
                    {data:2},
                    {data:3},
                ]
            })
        },100)

    }
}