import Mock from 'mockjs'
//引入数据
import data  from './data.js'
//请求data
Mock.mock('/data','get',data.data);
//请求dataList
Mock.mock('/getList','post',(opt)=>{
    return data.list
});
//Login登录
Mock.mock('/login','post',(opt)=>{
    /**
     * account
     * password
     * **/
    let opts = JSON.parse(opt.body)
    let d = data.account,str='',code=-1;
    if(d[opts.account]===undefined){
        str = '账号不存在';
        code = -1
    }else{
        //账号存在
        if(opts.password === d[opts.account]['password']){
            str='登陆成功';code = 0
        }else{
            str='密码错误';code = -1
        }
    }
    return {msg:str,code}
});