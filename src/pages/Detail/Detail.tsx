import React from "react";
import "./Detail.less";
// import InfiniteScroll from "react-infinite-scroller";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import { Carousel } from 'antd';

class Detail extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state={
            LoadingFlag:true
        }
    }
    componentDidMount(): void {
        setTimeout(()=>{
            this.setState({
                LoadingFlag:false
            })
        },1500)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {location} = this.props;
        const {LoadingFlag} = this.state;
        return (
            <div className={'content'}>
                <NavBar {...this.props}/>
                <div className={'mainContent'}>
                    <div className="scrollContent">
                        <div className={'ContentBox'}>
                            <Carousel autoplay className={'Carousel'}>
                                <div>
                                    <img src={require('../../assets/images/Home/banner1.png')} alt=""/>
                                </div>
                                <div>
                                    <img src={require('../../assets/images/Home/banner2.png')} alt=""/>
                                </div>
                                <div>
                                    <img src={require('../../assets/images/Home/banner3.png')} alt=""/>
                                </div>
                                <div>
                                    <img src={require('../../assets/images/Home/banner4.png')} alt=""/>
                                </div>
                            </Carousel>
                            <p>当前的id为：{location.state.id}</p>
                        </div>
                    </div>

                    <Loading visible={ LoadingFlag } autoHide={false}/>

                </div>
            </div>
        );
    }

}
export default Detail