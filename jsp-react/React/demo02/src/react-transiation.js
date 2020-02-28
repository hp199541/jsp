import React, {Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
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
                <CSSTransition in = {this.state.isShow} timeout={2000} classNames='boss-text' unmountOnExit> 
                {/* unmountOnExit    dom也进行删除 */}
                    <div>boss</div>
                </CSSTransition>
                {/* <div className={this.state.isShow ? 'show': 'hide'}>boss</div> css实现 */}
                <div><button onClick={this.display.bind(this)}>显示</button></div>
            </Fragment>
        )
    }
}
