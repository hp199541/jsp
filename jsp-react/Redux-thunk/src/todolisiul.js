import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
class TodolisyUi extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div style={{margin:'10px'}}>
               <Input placeholder={this.props.inputvalue} style={{width:'250px'}} value={this.props.inputvalue}
               onChange={this.props.changeInputvalue}/>
               <Button type="primary" onClick={this.props.add}>提交</Button>
               <List bordered 
               dataSource={this.props.list} 
               renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.deleteItem(index)}}>{item}</List.Item>)} 
               style={{width:'250px'}}>
               </List>
            </div>
         );
    }
}
 
export default TodolisyUi;