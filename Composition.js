function App1(){
   return (
     <div>
       <h1>Hello Functional Component</h1>
       <h2>1st Composition</h2>
       <App2></App2>
       <App3></App3>
       <App4/>
     </div>
   );
 }

 function App2(){
   return (
     <div>
       <h2>2nd Composition</h2>
     </div>
   );
 }

 function App3(){
   return (
     <div>
       <h2>3rd Composition</h2>
     </div>
   );
 }

 function App4(){
   return (
     <div>
       <h2>4th Composition</h2>
     </div>
   );
 }

 export default App1;