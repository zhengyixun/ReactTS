import React from 'react';
// import axios from 'axios';
// import Child from "./components/Child";
import NavBar from "./components/NavBar/NavBar"; //自定义navbar
import './App.less';
import Home from "./pages/Home/Home";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(): void {
        // axios.get('/data').then((res: any) => {
        //     console.log(res)
        // })
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div className="App">
                <NavBar {...this.props}/>
                <div className="main">

                    <Home  {...this.props}/>

                </div>
                {/*测试redux*/}
                {/*<Child />*/}
            </div>
        );
    }


}

export default App;
