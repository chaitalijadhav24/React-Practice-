function App(props){
   return(
     <div>
       <h1>Props Methods</h1>
       <p>
        Name: {props.name}
       </p>
       <p>
         City: {props.city} 
       </p>
      <p>
         Salary: {props.salary}
       </p>
       <p>
         State: {props.state}
       </p>
       <p>
         Contact: {props.contact}
       </p>
       <App1> </App1>
     </div>
   );
 }
 function App1(){
   return(
     <div>
       <h1>Props Methods</h1>
       <App name={"Chaitali"} 
            city={"Bangalore"} 
            salary={"50000"} 
            state={"Karnataka"} 
            contact={"1234567890"}>
        </App>
     </div>
   );
 }
 export default App;