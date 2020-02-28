import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import 'antd/dist/antd.css';
import {DELETE_LIST,CHANGE_INPUT,ADD_ITEM} from './store/actiontype'
class Todolist extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this))
    }
    storeChange () {
        this.setState(store.getState())
    }
    add () {
        const action = {
            type:ADD_ITEM,
            // value:e.target.value
        }
        store.dispatch(action)
    }
    delete (index) {
        // console.log(index)
        const action = {
            type:DELETE_LIST,
            payload:index
        }
        store.dispatch(action)
    }
    changeInputvalue (e) {
        // console.log(e.target.value)
        const action = {
            type:CHANGE_INPUT,
            value:e.target.value
        }
        store.dispatch(action)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
               <Input placeholder={this.state.inputvalue} style={{width:'250px'}} value={this.state.inputvalue}
               onChange={this.changeInputvalue.bind(this)}/>
               <Button type="primary" onClick={this.add.bind(this)}>提交</Button>
            <List bordered dataSource={this.state.list} renderItem={(item,index) => <List.Item onClick={this.delete.bind(this,index)}>{item}</List.Item>} style={{width:'250px'}}>
            </List>
            </div>
         );
    }
}
 
export default Todolist;