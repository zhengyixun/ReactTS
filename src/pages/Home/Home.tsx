import React from 'react';

import "../../common.less"

class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {

        }
    }
    Toapp(){
        const {history}  = this.props;
        history.push("/")
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="background">
                <span onClick={this.Toapp.bind(this)}>ToApp</span>
            </div>
        );
    }
}

export default Home;