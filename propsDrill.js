import { useState } from "react"


function App1(){
    const [data,setData]=useState("Hello we are learning frontend")
    return(
        <div>
            <h1>useContext Method</h1>
            <h2>1st Component</h2>
            <App2 value={data}/>
        </div>
    )
}

function App2({value}){
    return(
        <div>
            <h2>2nd Component </h2>
            <App3 value={value}/>
        </div>
    )
}

function App3({value}){
    return(
        <div>
            <h2>2nd Component </h2>
            <App4 value={value}/>
        </div>
    )
}

function App4({value}){
    return(
        <div>
            <h2>2nd Component {value}</h2>
        </div>
    )
}

export default App1;