import React from 'react'
import {withRouter} from 'dva/router'
import * as api from './../services/example'
import Mock from 'mockjs'
class Product extends React.Component {
    componentDidMount () {
        console.log(Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        }))
        api.getProlist()
        .then(res => {
            // console.log(res)
        })
    }
    goIndex = () => {
        console.log(this.props)
        this.props.history.push('/')
    }

    getprolistAsync = () => {
        const currentprolist = {
            name:'黄平Async'
        }
        this.props.dispatch({
            type:'product/updatelistAsync',
            payload:currentprolist
        })
    }
    getprolistHttp = () => {
        this.props.dispatch({
            type:'product/updatelistHttp',
            // payload
        })
    }
   
    getprolist = () => {
        const currentprolist = {
            name:'黄平0'
        }
        this.props.dispatch({
            type:'product/updatelist',
            payload:currentprolist
        })
    }
    render(){
        const {productlist} = this.props.prolist
        console.log(this.props.prolist)

        return (
            <div>
                <ul>
                    {
                        productlist.map((item,index) => <li key={index}>{item.name}</li>)  
                    } 
                </ul>
                <button onClick={this.getprolist}>获取详情页</button><br></br>
                <button onClick={this.goIndex}>去首页</button>
                <button onClick={this.getprolistAsync}>异步获取详情页</button><br></br>
                <button onClick={this.getprolistHttp}>网络请求获取详情页</button><br></br>
            </div>
        )
    }
}
export default withRouter(Product)