import{useState,useEffect} from "react";
import axios from 'axios';

function App()
{
    const[users,setUsers]=useState([])
    useEffect(()=>{
fetch('http://localhost:3001/view')
.then(res=> setUsers(res.data))
.catch(err=> console.log(err))
    },[])
    return(<>
        <div>
            <b>content</b>
            
<b>{users.map(us=>{
    return <div>{ 
        us.note}</div>
        
})
    }</b>
            
        </div>
    </>);
}
export default App;