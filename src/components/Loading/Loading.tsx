import React from "react";
import "./Loading.less";
// @ts-ignore
import { LoadingOutlined} from '@ant-design/icons';
class Loading extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            visible: props.visible || true, //是否显示
            autoHide: props.visible || false, //自动隐藏
            showTime: props.showTime || 1500, //加载框显示时间
            text: props.text || '正在加载' ,  // 提示文案
        }
    }
    componentDidMount(): void {
        let {autoHide,showTime,visible} = this.state;
        if(autoHide && visible){ //要自动隐藏
           setTimeout(()=>{
                this.setState({
                    visible:false
                })
            },showTime)
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { text,visible } = this.state;
        return (
            <div>
                {
                    visible && <div className={'boxF'}>
                        <div className={'box'}>
                            <LoadingOutlined className={'loading'}/><br/>
                            <span className={'text'}>{text}</span>
                        </div>
                    </div>
                }

            </div>


        );
    }
}
export default Loading;