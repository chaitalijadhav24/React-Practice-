 import "./App.css";
 import React from "react";
 class App extends React.Component {
   render() {
     return (
       <div>
         <table style={
           { width: "100%", textAlign: "left", borderCollapse: "collapse" }
         }>
           <thead>
             <tr>
               <th>Sr.No</th>
               <th>Full Name</th>
               <th>Age</th>
               <th>Salary</th>
               <th>Contact</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>01</td>
               <td>John Doe</td>
               <td>30</td>
               <td>$5000</td>
               <td>123-456-7890</td>
             </tr>
             <tr>
               <td>02</td>
               <td>John Doe</td>
               <td>30</td>
               <td>$5000</td>
               <td>123-456-7890</td>
             </tr>
             <tr>
               <td>03</td>
               <td>John Doe</td>
               <td>30</td>
               <td>$5000</td>
               <td>123-456-7890</td>
             </tr>
             <tr>
              <td>04</td>
               <td>John Doe</td>
               <td>30</td>
               <td>$5000</td>
               <td>123-456-7890</td>
             </tr>
             <tr>
               <td>05</td>
               <td>John Doe</td>
               <td>30</td>
               <td>$5000</td>
               <td>123-456-7890</td>
             </tr>
           </tbody>
         </table>
       </div>
     );
   }
 }
 export default App;