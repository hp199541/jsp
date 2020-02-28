import * as api from './../services/example'
export default {
    namespace:'product',
    state:{
        productlist:[
            {name:'黄平1'},
            {name:'黄平2'}
        ]
    },
    reducers:{
        updatelist(state,action){
            let currentprolist = deepclone(state)
            currentprolist.productlist.push(action.payload)
            return currentprolist
        }
    },
    effects: {
        *updatelistAsync({ payload }, { call, put }) {  // eslint-disable-line
          yield put(
              {
                type:'updatelist',
                payload
             },
              );
        },
         // 异步网络请求
        *updatelistHttp({ payload }, { call, put }) {  // eslint-disable-line
            const result =   yield call(api.getProlist,payload) //call的第二个参数，与上面一行的第一个参数value相同
            console.log('result',result)
            const data = result.data
            if(data){
                // console.log(data)
                yield put(
                    {
                      type:'updatelist',
                      payload:data
                   },
                );
            }
        },
    },
}
function deepclone (arr){
    let obj = JSON.stringify(arr),
    objClone = JSON.parse(obj);
    return objClone
}