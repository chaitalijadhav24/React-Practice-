import React from "react";
class App extends React.Component{

    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            pswd:"",
            cpswd:""
        }
         
        
    }
     updateName=(e)=>{
            this.setState({
                name:e.target.value
            })    
          }

          updateEmail=(e)=>{
            this.setState({
                email:e.target.value
            })
          }
          
          updatePassword=(e)=>{
            this.setState({
                pswd:e.target.value
            })
          }
          updateCPassword=(e)=>{
            this.setState({
                cpswd:e.target.value
            })
          }

          updateSubmit=()=>{
            if(this.state.name.length<6){
                alert("Usename should have more than 6 charecters....!")
            }
            else if(this.state.pswd !== this.state.cpswd){
                alert("Password does not matched....!")
            } 
            else{
                alert("Form Validation Successfull....!")
            }
          }
          
          // storages

          

    render(){
        return(
            <div>
                <center>
                    <h1>Form Validation</h1>
                    <form onSubmit={this.updateSubmit}>
                    <label>Fullname:</label>
                    <input type="text" value={this.state.name} onChange={this.updateName}></input>
                    <br/><br/>
                    <label>Email:</label>
                    <input type="email" value={this.state.email} onChange={this.updateEmail}></input>
                    <br/><br/>
                    <label>Password:</label>
                    <input type="password" value={this.state.pswd} onChange={this.updatePassword}></input>
                    <br/><br/>
                    <label>Confirm Password:</label>
                    <input type="password" value={this.state.cpswd} onChange={this.updateCPassword}></input>
                    <br/><br/>
                    <input type="submit"></input>
                    </form>
                </center>
            </div>
        )
    }
}
export default App;