import { createContext, useContext, useState } from "react"
const context=createContext()

function App1(){
    const [data,setData]=useState("Hello we are learning frontend")
    return(
        <div>
            <context.Provider value={data}>
            <h1>useContext Method</h1>
            <h2>1st Component</h2>
            <App2 value={data}/>
            </context.Provider>
        </div>
    )
}

function App2(){
    return(
        <div>
            <h2>2nd Component </h2>
            <App3/>
        </div>
    )
}

function App3(){
    return(
        <div>
            <h2>2nd Component </h2>
            <App4/>
        </div>
    )
}

function App4(){
    const value=useContext(context)
    return(
        <div>
            <h2>2nd Component {value}</h2>
        </div>
    )
}

export default App1;