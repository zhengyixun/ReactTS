// actions.js

// action也是函数
export function setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
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