import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// Item.PropTypes={
//     content:PropTypes.string
// }
class Item extends Component {
    constructor(props){
        super(props)
        this.state = {  }
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    handelClick () {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return ( 
            <li onClick={this.handelClick.bind(this)}>
                {
                    this.props.content
                }
            </li>
         );
    }
}

export default Item;