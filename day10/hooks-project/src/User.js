import React ,{useState,useEffect}from "react";

function User()
{
    const[user,serUser]=useState("");
    useEffect(()=>{
        fetchUser(); 
    });
    async function fetchUser()
    {
        const endpointURL="https;//randomuser.me/api/";
        await fetch(endpointURL).then(results=>{
            return results.json();
        })
        .then (data=>{
            let user =data.results.map((user)=>{
                let userElement = '';
                userElement=<div key={user}>
                    <h2>{user.name.first}</h2>
                    <h2>{user.name.last}</h2> 
                </div>

                return userElement;
            });
        })
    };
}
export default User;