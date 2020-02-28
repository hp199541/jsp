import React, { Component } from 'react';
import Todolist from './todolisiul'
import store from './store';
// import {DELETE_LIST,CHANGE_INPUT,ADD_ITEM} from './store/actiontype'
import {changeInputValue,deletelistaction,additemaction} from './store/actionCreators'
class TodolisyUi extends Component {
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
        const action = additemaction()
        store.dispatch(action)
    }
    delete (index) {
        // console.log('index',index)
        const action = deletelistaction(index)
        store.dispatch(action)
    }
    changeInputvalue (e) {
        // console.log(e.target.value)
        const action = changeInputValue(e.target.value)
        store.dispatch(action)
    }
    render() { 
        return ( 
          <Todolist 
          inputvalue={this.state.inputvalue}
          changeInputvalue = {this.changeInputvalue.bind(this)}
          add = {this.add.bind(this)}
          list = {this.state.list}
         deleteItem = {this.delete.bind(this)}
          ></Todolist>
         );
    }
}
 
export default TodolisyUi;