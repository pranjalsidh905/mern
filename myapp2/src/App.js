import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Login() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword] =useState("");
    
  const onSubmitFrom = (e) => {
    e.preventDefault();
    console.log(name,email,phone,password,confirmPassword);
    const data ={
      name: name,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const stringifyData = JSON.stringify(data);
    localStorage.setItem("data",stringifyData);
    console.log(">>>>>>>>>>>>>data",data);
    console.log(">>>>>>>>>>>>>data",JSON.stringify(data));
  };
  return (
    
   <div class="container">
    <div class="mainbox">
      <div className="sign-up">
        <h1>Signup</h1>
      </div>
      <form onSubmit={onSubmitFrom}>
    
    <div class="div">
        {/* <label>Full Name</label><br /> */}
      <input type="text" placeholder="Enter the name" onChange={(m) => setName(m.target.value)}/>
    </div>
   
     
    <div class="div">
      {/* <label>Email</label><br /> */}
      <input type="Email" placeholder="Enter the Email" onChange={(m)=>setEmail(m.target.value)}/>
    </div>
 
  
    <div class="div">
      {/* <label >Phone No.</label><br /> */}
      <input type="number" placeholder="Enter the Ph.no" onChange={(m)=>setPhone(m.target.value)}/>
    </div>
    
 
    <div class="div">
      {/* <label htmlFor="">Password</label><br /> */}
      <input type="Password" placeholder="Enter the Password" onChange={(m)=>setPassword(m.target.value)}/>
    </div>
    

    <div class="div">
      <label htmlFor="">Password</label><br />
      <input type="Password" placeholder="confiram Password" onChange={(m)=>setConfirmPassword(m.target.value)}/>
    </div>
    

    <button type="submit">Sign Up</button>
    </form>
  </div>
</div>
  );
}

export default Login;
