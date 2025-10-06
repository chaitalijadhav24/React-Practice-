// import { ResponseModality } from "firebase/ai";
import { useEffect, useState } from "react";
import "./App.css"

function App(){
    const [data, setData]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")

        .then((res)=>{
            return res.json()
        })

        .then((response)=>{
            console.log(response)
            //document.write(response)
            setData(response)
        })
    })
    
    return(
        <div>
            <h1>Fetch the data from backend...!</h1>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data)=>(
                    <tr>
                        <td>{data.userId}</td>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default App;
        