import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");

  const updateSubmit = (e) => {
    e.preventDefault(); 
    if (name.length < 6) {
      alert("Username should have greater than 6 characters...!");
    } else if (pswd !== cpswd) {
      alert("Passwords do not match...!");
    } else {
      

      const userData = {
        name: name,
        email: email,
        password: pswd,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      alert("Form validation successful  & data stored in localStorage");



      
      setName("");
      setEmail("");
      setPswd("");
      setCpswd("");
    }
    
  };
//   localStorage.clear()

  return (
    <div>
      <center>
        <h1>Form Validation</h1>
        <form onSubmit={updateSubmit}>
          <label>Fullname:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br /><br />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br /><br />

          <label>Password:</label>
          <input type="password" value={pswd} onChange={(e) => setPswd(e.target.value)} />
          <br /><br />

          <label>Confirm Password:</label>
          <input type="password" value={cpswd} onChange={(e) => setCpswd(e.target.value)} />
          <br /><br />

          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default App;
