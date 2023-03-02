import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [name,setName]=useState("")
  const [fname,fsetName]=useState("")
  const [mname,msetName]=useState("")
  const [bname,bsetName]=useState("")
  return (
    
   <div class="container">
    <div class="mainbox">

    
    <div class="div">
     
      <input type="text" placeholder="Enter the name" onChange={(m) => setName(m.target.value)}/>
    </div>
    <p>This is a {name}</p> 
     
    <div class="div">
      
      <input type="text" placeholder="Enter the name" onChange={(m)=>fsetName(m.target.value)}/>
    </div>
    <p>father name is {fname}</p>
  
    <div class="div">
      
      <input type="text" placeholder="Enter the name" onChange={(m)=>msetName(m.target.value)}/>
    </div>
    <p>father name is {mname}</p>
 
    <div class="div">
     
      <input type="text" placeholder="Enter the name" onChange={(m)=>bsetName(m.target.value)}/>
    </div>
    <p>father name is {bname}</p>


    <button>sumbit</button>
  </div>
</div>
  );
}

export default App;
