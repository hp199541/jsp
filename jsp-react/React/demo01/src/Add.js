import React, {Fragment} from 'react';
import Item from './item'
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputvalue:'搓背',
            list:['洗脚','剃头']
        }
    }
    add () {
        // console.log(this.state.list.push(this.state.inputvalue))
        this.setState({
            list:[...this.state.list,this.state.inputvalue]
            // list:this.state.list.push(this.state.inputvalue)
        })
    }

    //删除
    delete (index){
        // console.log(index)
        // 不能直接操作state里面的变量，先设置一个变量，再对变量操作，否则影响性能
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    getinput (e) {
        this.setState({
            inputvalue:e.target.value
        })
    }
    render () {
        return (
            <Fragment>
                {/* 注释 */}
                <div><input value = {this.state.inputvalue} onChange={this.getinput.bind(this)}/><button onClick={this.add.bind(this)}>增加服务</button></div>
                <ul>
                    {
                        this.state.list.map((item,index) => (
                            <Item content={item} key={index} index={index} deleteItem ={this.delete.bind(this)}></Item>
                         ))
                    }
                    <Item></Item>
                    {/*
                        this.state.list.map((item,index) => (
                        <li key={index} onClick={this.delete.bind(this,index)}
                        //  dangerouslySetInnerHTML={{_html:item}}
                         >{item}</li>
                         ))
                    */}
                </ul>
            </Fragment>
        )
    }
}