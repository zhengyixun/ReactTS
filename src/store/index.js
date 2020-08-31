// applyMiddleware: redux通过该函数来使用中间件  createStore: 用于创建store实例
import {applyMiddleware, createStore} from 'redux'
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时
// ，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
import thunk from 'redux-thunk'
// 引入reducer
import reducers from './reducers.js';
import {persistStore, persistReducer} from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session';

const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // 缓存机制
    blacklist: ['name'] // reducer 里不持久化的数据,除此外均为持久化数据
};
const myPersistReducer = persistReducer(storageConfig, reducers);

// 创建store实例
let store = createStore(
    myPersistReducer,
    // reducers,
    applyMiddleware(thunk)
);
export const persistor = persistStore(store)
export default store