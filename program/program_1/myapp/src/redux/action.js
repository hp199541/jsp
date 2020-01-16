import {AUTH_SUCCESS, ERR_MSG} from './action-type'
import {reqRegister,reqLogin} from '../api/index'
export const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
export const errMsg = (msg) => ({type:ERR_MSG,data:msg})
export const register = (user) => {
      // 使用ES6的ASYNC和AWAIT
//     return async dispatch => {
//       const response = await reqRegister(user)
//       const result = response.data
//       // console.log(result)
//       if (result.code === 0){
//             dispatch(authSuccess(result.data))
//       }else {
//             dispatch(errMsg(result.msg))
//       }
//     }

      //使用传统的promise写法
      return dispatch => {
            reqRegister(user).then(res => {
                  // console.log(res)
                   if (res.data.code === 0){
                        dispatch(authSuccess(res.data.data))
                  }else {
                        dispatch(errMsg(res.data.msg))
                  }
            })
      }
}