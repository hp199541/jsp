import React, {Component} from 'react'
import { Button,WhiteSpace,NavBar,InputItem,Radio,List } from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/action'
import 'antd-mobile/dist/antd-mobile.css';
const RadioItem = Radio.RadioItem
class Register extends  Component {
    state = {
        username:'',
        password:''
    }
    handelchange(username) {
        this.setState({
            username
        })
    }
    handelchangepass(password){
        this.setState({
            password
        })
    }
    register(){
        this.props.register(this.state)
    }
    render () {
        // console.log(this.props)
        return (
            <div>
                <NavBar>上海预言</NavBar>
                <WhiteSpace size="lg" />
                <InputItem onChange={this.handelchange.bind(this)} value={this.state.username}>用户名：</InputItem>
                <WhiteSpace size="lg" />
                <InputItem type='password' onChange={this.handelchangepass.bind(this)} value={this.state.password}>密码：</InputItem>
                <WhiteSpace size="lg" />
                <List>
                 <RadioItem>
                    <List.Item.Brief>男</List.Item.Brief>
                 </RadioItem>
                 <RadioItem>
                    <List.Item.Brief>女</List.Item.Brief>
                 </RadioItem>
                 </List>
                <Button type="primary" onClick = {this.register.bind(this)}>注册</Button><WhiteSpace />
                <Button disabled>已有帐户，请直接登录</Button><WhiteSpace />
            </div>
        )
    }
}
export default connect(
    state => ({user:state}),
    {register}
    )(Register)