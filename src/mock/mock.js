import Mock from 'mockjs'
//引入数据
import data from './data.js'
//请求data
Mock.mock('/data','get',data);
