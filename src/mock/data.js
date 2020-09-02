import Mock, {Random}from 'mockjs'
let data=[];
for(let i=0;i<Math.random()*10;i++){
    let item= {
        title:Random.cparagraph(5,10),
        introduce:Random.cparagraph(20,60),
        courseImg:Random.image(),
        author:Random.cname(),
        date:Random.date()
    };
    data.push(item)
}


export default Mock.mock({
    data,
    'account':{
        'admin':{name:'初始用户',password:'123456',avator:'',level:'0'},
        'user':{name:'普通用户',password:'123456',avator:'',level:'1'}
    },
    'list|17':[
        {'id|+1':1 , 'url':function(){return `http://192.168.124.23:12138/${this.id}.jpg`}}
    ]
});
