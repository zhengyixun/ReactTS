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
export default  Mock.mock({
    data
});
