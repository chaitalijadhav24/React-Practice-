const count=0;

function Reducer(state= count, action){
    const{ type, payload}= action 
    switch(type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return 0
        default: 
        return state
    }
}
export default Reducer;