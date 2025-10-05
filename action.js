import { type } from "@testing-library/user-event/dist/type"

export const increment=()=> async dispatch=>{
    dispatch({
        type:"INCREMENT"
    })
}

export const decrement=()=> async dispatch=>{
    dispatch({
        type:"DECREMENT"
    })
}

export const reset=()=> async dispatch=>{
    dispatch({
        type:"RESET"
    })
}