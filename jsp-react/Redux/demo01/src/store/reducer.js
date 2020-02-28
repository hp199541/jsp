import {DELETE_LIST,CHANGE_INPUT,ADD_ITEM} from './actiontype'
const initstate = {
    inputvalue:'to do something',
    list:[
        '1',
        '2',
        '3',
        '4'
    ]
}
export default (state = initstate,action) => {
    // reducer里面只能接受state,不能直接改变
    // console.log(state,action)
    if(action.type === CHANGE_INPUT) {
        // console.log(1)
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.inputvalue = action.value
        return newstate
    } else if (action.type === ADD_ITEM) {
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.list.push(newstate.inputvalue)
        newstate.inputvalue = ''
        return newstate
    } else if (action.type === DELETE_LIST) {
        let newstate = JSON.parse(JSON.stringify(state))
        newstate.list.splice(action.payload,1)
        return newstate
    }else {
        return state
    }
}