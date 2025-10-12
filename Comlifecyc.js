import React from "react";
import { data } from "react-router-dom";
class App extends React.Component {
    constructor(){
        super();
        this.state={
            data:"Frontend"
        }
    }
    componentWillMount(){
        alert("Hello we are learning life cycle method...!")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("para2").innerHTML="Previous state is : " + prevState.data
    }
    render (){
        return(
            <div>
                <h2>Hello Component</h2>
                <h2>{this.state.data}</h2>
                <h2 id="para2"></h2>
                <h2 id="para1"></h2>
                <button onClick={this.deleteData}>Delete</button>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data:"Backend"
            })
        },3000)
    }

    componentWillUpdate(){
        alert("Are you updating your state...?")
    }
    
    componentDidUpdate(){
        document.getElementById("para1").innerHTML="Updated State is : " + this.state.data
    }

     shouldComponentUpdate(){
         return true
     }

    // shouldComponentUpdate(){
    //     return false
    // }

    deleteData=()=>{
        this.setState({
            data:false
        })
    }
}
export default App;