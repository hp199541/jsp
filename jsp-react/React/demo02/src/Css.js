import React, {Fragment} from 'react';
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isShow:true
        }
    }
    display () {
        this.setState({
            isShow:this.state.isShow ? false : true 
        })
    }
    render () {
        return (
            <Fragment>
                <div className={this.state.isShow ? 'show': 'hide'}>boss</div>
                <div><button onClick={this.display.bind(this)}>显示</button></div>
            </Fragment>
        )
    }
}
