import React from "react";
import { connect } from 'react-redux';
// 引入action
import { setInfoList } from '../../store/action'
class Child extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={

        }
    }
    componentDidMount(): void {
        // 组件传值
        let {  setInfoList } = this.props;

        // 触发setInfoList action
        setInfoList();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {pageTitle, infoList} = this.props;
        return (
            <div className="child">
                <span>
                    <b>6</b>
                    <h1>{pageTitle}</h1>
                    {
                        infoList&&infoList.length > 0 ? (
                            <ul>
                                {
                                    infoList.map((item:any, index:number) => {
                                        return <li key={index}>{item.data}</li>
                                    })
                                }
                            </ul>
                        ):null
                    }
                </span>
            </div>
        );
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state:any) => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList
    }
};
// mapDispatchToProps:将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        setInfoList (data:any) {
            dispatch(setInfoList(data))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)( Child );