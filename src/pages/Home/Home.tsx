import React from 'react';
import ReactDom from 'react-dom'
// @ts-ignore
import { LoadingOutlined} from '@ant-design/icons';
import axios from 'axios';
import "./Home.less"
import {randomNum} from '../../utils/utils';
//下拉加载 瀑布流
import Masonry from 'masonry-layout'  //实现瀑布流
import imagesloaded from 'imagesloaded' //监听图片加载
import InfiniteScroll from 'react-infinite-scroller' //下拉加载
const Loading = () => {
    return (<div className={'loader'}>
        <LoadingOutlined  className={'Imgs'}/><br/>
        <span>正在加载</span>
    </div>)
}
class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            height: [],
            data: [],
            hasMore: true, // 是否开启下拉加载
        }
    }

    componentDidMount(): void {
        // 生成随机的数组
        let arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push(randomNum(50, 200))
        }
        this.setState({
            height: arr
        });
        this.getList();
    }
    getList=()=>{
        axios.post('/getList',{
            current: 10,page: 1
        }).then((res: any) => {
            if(res.status === 200){
                console.log(res.data)
                let arr:any = [];
                res.data && res.data.map((item:any) => {
                    arr.push({
                        id: item.id,url: item.url
                    })
                    return item.id
                })
                this.setState({
                    data: arr
                })
            }
        }).then(()=>{
            this.imagesOnload()
        })
    };
    //图片懒加载
    imagesOnload = () => {
        const elLoad = imagesloaded('.pages_hoc');  //获取下拉加载里面的第一个盒子
        //always 图片已全部加载，或被确认加载失败
        elLoad.on('always', () => {
            // 调用瀑布流
            this.advanceWidth()
        })
    };
    //瀑布流
    advanceWidth = () => {
        const elem = document.querySelector('.pages_hoc');
        // @ts-ignore
        new Masonry(elem, {
            itemSelector: '.imgBox', //要布局的网格元素
            columnWidth: '.imgBox', //自适应
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 10,// 网格间水平方向边距，垂直方向边距使用css的margin-bottom设置
        });
    };
    // 下拉加载
    loadMoreData = () => {
        const {data} = this.state;
        setTimeout(() => {
            this.setState({
                data: [...data, ...this.state.data] //拼接每次加载的数据 arr是我自定义的数据
            }, () => {
                this.imagesOnload() // 每次获取完数据 触发
            })
        }, 1000)

    };
    toTop(){
        let d = document.getElementById('pageBox');
        // @ts-ignore
        ReactDom.findDOMNode(d)['scrollTop'] = 0
    };
    toDetail(id:any){
        const {history} = this.props;
        history.push({
            pathname:"/Detail",
            state:{ id }
        })
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { data, hasMore } = this.state;
        return (
            <div className={'content'}>
                <div className={'pages_pinterest scrollBar'} ref={'pageBox'} id={'pageBox'}>
                    {/* 下拉加载 */}
                    <InfiniteScroll
                        initialLoad={false} // 不让它进入直接加载
                        pageStart={1} // 设置初始化请求的页数
                        loadMore={this.loadMoreData}  // 监听的ajax请求
                        hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
                        useWindow={false} // 不监听 window 滚动条
                        loader={Loading()}
                    >
                        <div className="pages_hoc">
                            <div className={'pages_hocx'}>
                                {
                                    data.map((item:any, index:any) => {
                                        return (
                                            <div key={index} className='imgBox' onClick={this.toDetail.bind(this,item.id)}>
                                                <img src={item.url} alt=''/>
                                                {/*<Image src={item} className={'img'} alt=''/>*/}
                                                <div className={'boxSon'}>
                                                    <div>
                                                        <span>相册: 2122121</span>
                                                        <span>后期: 蒙汜</span>
                                                    </div>
                                                    <div>
                                                        <span>相册: 汤谷</span>
                                                        <span>后期: 蒙汜</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </InfiniteScroll>
                </div>
                {/*  回到顶部  */}
                <div className={'toTop'}>
                    <img src={require('../../assets/images/toTop.png')} alt="" id={'toTop'} onClick={this.toTop.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Home;