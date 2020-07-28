import React from 'react';
import axios from 'axios';
// import Child from "./components/Child";
import NavBar from "./components/NavBar/NavBar"; //自定义navbar
import {Card, Table, Button, Radio,Input } from 'antd';
import './App.less';

const tabList = [
    {key: 'tab1', tab: '票据金额'},
    {key: 'tab2', tab: '心愿清单'},
];
const RadioChange = (e: any) => {
    console.log(`radio checked:${e.target.value}`);
};
const getTab1Con = () => {
    const radioStyle: any = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        width: "200px",
        marginBottom:"10px"
    };
    return (
        <div>
            <span className="floatLeft">按条件查询</span>
            <div className="listItem">
                <span className="listSpan">承兑人类型</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio.Button value="a">全部</Radio.Button>
                    <Radio.Button value="b">国股</Radio.Button>
                    <Radio.Button value="c">城商</Radio.Button>
                    <Radio.Button value="d">外贸</Radio.Button>
                    <Radio.Button value="e">农联</Radio.Button>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan">票面金额</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio.Button value="a">全部</Radio.Button>
                    <Radio.Button value="b">10万以下</Radio.Button>
                    <Radio.Button value="c">10万~50万</Radio.Button>
                    <Radio.Button value="d">50万~100万</Radio.Button>
                    <Radio.Button value="e">100万以上</Radio.Button>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan">剩余天数</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio.Button value="a">全部</Radio.Button>
                    <Radio.Button value="g">超期</Radio.Button>
                    <Radio.Button value="b">90天以内</Radio.Button>
                    <Radio.Button value="c">91-160天</Radio.Button>
                    <Radio.Button value="d">161-185天</Radio.Button>
                    <Radio.Button value="e">186-330天</Radio.Button>
                    <Radio.Button value="f">331天及以上</Radio.Button>
                    <Input className="inp"/><Input className="inp"/>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan">瑕疵情况</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio.Button value="a">全部</Radio.Button>
                    <Radio.Button value="b">有瑕疵</Radio.Button>
                    <Radio.Button value="c">无瑕疵</Radio.Button>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan">支付渠道</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio.Button value="a">全部</Radio.Button>
                    <Radio.Button value="b">苏宁</Radio.Button>
                    <Radio.Button value="c">新意</Radio.Button>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan">报价方式</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio style={radioStyle} value={"a"}>
                        按利率 <span className="radioSpan">年利率不低于</span>
                        <Input placeholder="%" />
                        <span className="radioSpan">每十万手续费不低于</span>
                        <Input placeholder="元" />
                    </Radio>
                    <Radio style={radioStyle} value={"b"}>
                        按扣费 <span className="radioSpan">每十万扣费费不低于</span>
                        <Input placeholder="元" />
                    </Radio>
                </Radio.Group>
            </div>
        </div>
    )
};
const getTab2Con = () => {
    return (
        <div>
            <span className="floatLeft">票面金额</span>
            <div className="listItem">
                <span className="listSpan1">承兑人类型</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio value={1}>300万以下</Radio>
                    <Radio value={2}>300万以上</Radio>
                </Radio.Group>
            </div>
            <div className="listItem">
                <span className="listSpan1">剩余天数</span>
                <Radio.Group onChange={RadioChange} defaultValue="a">
                    <Radio value={1}>≤90天</Radio>
                    <Radio value={2}>91-180天</Radio>
                    <Radio value={3}>181天以上</Radio>
                </Radio.Group>
            </div>
        </div>
    )
};

const contentList: any = {
    tab1: getTab1Con(),
    tab2: getTab2Con(),
};
const columns: any = [
    {title: '心愿单名称', dataIndex: 'name', className: "th_"},
    {
        title: '票面金额（万元）', className: "th_",
        dataIndex: 'chinese',
        sorter: {
            compare: (a: any, b: any) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: '到期日（剩余天数）', className: "th_",
        dataIndex: 'math',
        sorter: {
            compare: (a: any, b: any) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: '价格', className: "th_",
        dataIndex: 'english',
        sorter: {
            compare: (a: any, b: any) => a.english - b.english,
            multiple: 1,
        },
    },
    {title: '支付方式', dataIndex: 'pay', className: "th_",},
    {
        title: '操作', dataIndex: 'edit', className: "th_",
        align: "center",
        render: (text: any) => {
            if (text === "1" || text === 1) {
                return (<Button>我要接单</Button>)
            } else if (text === "2" || text === 2) {
                return (<p>交易完成</p>)
            } else {
                return (<a href="#">{text}</a>)
            }

        }
    },
];

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            flag: false,
            key: 'tab2',
            noTitleKey: 'app',
            current: 1,
            tableData: [
                {key: '1', name: 'own', chinese: 99, math: 66, english: 33, pay: "1", notbest: "1", edit: "1"},
                {key: '2', name: 'Ji', chinese: 88, math: 55, english: 22, pay: "1", notbest: "1", edit: "1"},
                {key: '3', name: 'fask', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "1"},
                {key: '4', name: 'Joe Black', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "1"},
                {key: '5', name: 'sssk', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "1"},
                {key: '6', name: 'qwe', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '7', name: 'ewr', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '8', name: 'uy', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '9', name: 'gsdfgvs', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '10', name: 'fsdfsdfv', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '11', name: 'Jyt', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
                {key: '12', name: '151555', chinese: 77, math: 44, english: 11, pay: "1", notbest: "1", edit: "2"},
            ]
        }
    }

    componentDidMount(): void {
        axios.get('/data').then((res: any) => {
            console.log(res)
        })
    }

    //切换tab
    onTabChange = (key: any, type: any) => {
        console.log(key, type);
        this.setState({[type]: key});
    };
    onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {key, tableData} = this.state;
        return (
            <div className="App">
                <NavBar/>
                <div className="main">

                    <div className="searchContent">
                        <Card
                            style={{width: '100%'}}
                            extra={<a href="#" className="a">心愿单一键匹配</a>}
                            tabList={tabList}
                            activeTabKey={key}
                            onTabChange={key => {
                                this.onTabChange(key, 'key');
                            }}
                        >
                            {contentList[key]}
                        </Card>
                    </div>
                    {
                        key === "tab1" && <div className="table">
                            <Table columns={columns} dataSource={tableData} onChange={this.onChange.bind(this)}/>
                        </div>
                    }
                    {
                        key === "tab2" && <div className="cardItem">
                            {
                                tableData.map((item:any,index:number)=>{
                                    return (<Card key={index} title="电票" extra={<span>选择票号</span>} style={{ width: 290,textAlign:"left" }} hoverable className="cardItemSon">
                                        <p>票面金额：<b>3万元</b></p>
                                        <p>到期日：<b>2020-12-16</b></p>
                                        <p>剩余天数：<b>140 天</b></p>
                                        <p>票面金额：<b>3万元</b></p>
                                        <p>票号：<b>1313222090***6658869713</b></p>
                                        <p>承兑行：<b>兴业银行股份有限公司唐山分行</b></p>
                                        <Button block className="btn_">我要买票</Button>
                                    </Card>)
                                })

                            }


                        </div>
                    }
                </div>
                {/*测试redux*/}
                {/*<Child />*/}
            </div>
        );
    }


}

export default App;
