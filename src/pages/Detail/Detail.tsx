import React from "react";
import "./Detail.less";
import InfiniteScroll from "react-infinite-scroller";
import NavBar from "../../components/NavBar/NavBar";

class Detail extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state={

        }
    }
    componentDidMount(): void {
        console.log(this.props.location.state);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {location} = this.props
        return (
            <div className={'content'}>
                <NavBar {...this.props}/>
                <div className={'mainContent'}>
                    <div className="scrollContent">
                        <div className={'ContentBox'}>
                            <p>21212</p>
                            <p>当前的id为：{location.state.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Detail