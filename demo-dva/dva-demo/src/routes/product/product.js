import React from 'react';
import Product from '../../components/product'
import {connect} from 'dva'
class IndexPage extends React.Component {
    render() {
        // console.log('props',this.props)
        const {prolist,dispatch} = this.props
        return(
            <div>
                <Product dispatch={dispatch} prolist = { prolist}/>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        prolist:state.product
    }
}
export default connect(mapStatetoProps)(IndexPage)