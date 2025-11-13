import {useEffect, useState} from "react";
function App(){
    const [value,setValue]=useState("Hello Frontend.....!")
    const [count, setCount]=useState(0)
    const updateInfo=()=>{
        setValue("Hello Backend.....!")
    }
    // const updateINC=()=>{
    //     setCount(count+1)
    // }

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    })

    const updateDEC=()=>{
        setCount(count-1)
    }

    const updateRES=()=>{
        setCount(0)
    }
    return(
        <div>
            <h2>Hook Method</h2>
            <h2>{value}</h2>
            <button onClick={updateInfo}>Update</button>
            <h2>Count:{count}</h2>
            {/* <button onClick={updateINC}>INCREAMENT</button> */}
            <button onClick={updateDEC}>DECREAMENT</button>
            <button onClick={updateRES}>RESET</button>
        </div>
    )
}
export default App;