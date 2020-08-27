import React from 'react';
import "./Home.less"
import {randomNum} from '../../utils/utils';
//下拉加载 瀑布流
import Masonry from 'masonry-layout'  //实现瀑布流
import imagesloaded from 'imagesloaded' //监听图片加载
import InfiniteScroll from 'react-infinite-scroller' //下拉加载
const arr = [
    require('../../assets/images/Home/1.jpg'),
    require('../../assets/images/Home/2.jpg'),
    require('../../assets/images/Home/3.jpg'),
    require('../../assets/images/Home/4.jpg'),
    require('../../assets/images/Home/5.jpg'),
    require('../../assets/images/Home/6.jpg'),
    require('../../assets/images/Home/7.jpg'),
    'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
    require('../../assets/images/Home/8.jpg'),
    require('../../assets/images/Home/9.jpg'),
    require('../../assets/images/Home/10.jpg'),
    require('../../assets/images/Home/11.jpg'),
    require('../../assets/images/Home/12.jpg'),
    require('../../assets/images/Home/6.jpg'),
    require('../../assets/images/Home/13.jpg'),
    'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
    'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
    'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
    'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
    'https://img.zcool.cn/community/0170535e6d798ca80120a895397501.jpg@1280w_1l_2o_100sh.jpg',

];
const Loading = () => {
    return (<div className={'loader'}>

    </div>)
}
class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            height: [],
            data: arr,
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
        this.imagesOnload()
    }

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
                data: [...data, ...arr] //拼接每次加载的数据 arr是我自定义的数据
            }, () => {
                this.imagesOnload() // 每次获取完数据 触发
            })
        }, 1000)

    };
    toTop(){
        // 第一种方式
        // this.refs.pageBox.scrollTop = '0';
        // console.log( this.refs.pageBox.scrollTop=0)
        window.scrollTo(0,0)
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { data, hasMore } = this.state;
        return (
            <div className={'content'}>
                <div className={'pages_pinterest scrollBar'} ref='pageBox'>
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
                            {
                                data.map((item:any, index:any) => {
                                    return (
                                        <div key={index} className='imgBox'>
                                            <img src={item} alt=''/>
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