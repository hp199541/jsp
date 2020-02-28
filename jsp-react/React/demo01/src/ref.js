import React, { Component } from 'react';
class Ref extends Component {
    state = {  }
    handelchage (){
        console.log(this.input.value)
    }
    render() { 
        return ( 
            <input ref={(input) => {this.input = input}} onChange={this.handelchage.bind(this)}></input>
         );
    }
}
 
export default Ref;