import {DELETE_LIST,CHANGE_INPUT,ADD_ITEM} from './actiontype';
export const changeInputValue = (value) => ({
    type:CHANGE_INPUT,
    value
})
export const deletelistaction = (index) => ({
    type:DELETE_LIST,
    payload:index
})
export const additemaction = () => ({
    type:ADD_ITEM
})