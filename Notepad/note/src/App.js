import{useState,useEffect} from "react";
import axios from 'axios';
import './App.css';
function App()
{
    const[users,setUsers]=useState([])
    const[note,setCont]=useState()
    const[dn,setDn]=useState()
    useEffect(()=>{
axios.get('http://localhost:3001/view')
.then(res=> setUsers(res.data))
.catch(err=> console.log(err))
    },[])
    const submit=()=>{
        axios.post('http://localhost:3001/save',{note},{dn})
        .then((users)=>{
            console.log(users)
        })
.catch(err=> console.log(err))
    }
    
    return(<><center>
        <label>Enter your content here</label><br></br>
    <input className="gg" type="text" onChange={(e) => setCont(e.target.value)}></input><br></br>
    <button onClick={submit}>Submit</button>
    <button onClick={()=>window.location.reload(false)}>get data</button>
    </center>
        <div>
            <bf class="tital">content:</bf>
<b>{users.map(user=>{
    return <div class="notes"><p>{
        user.note}<hr></hr></p></div>
})
    }</b>
            
        </div>
    </>);
}
export default App;