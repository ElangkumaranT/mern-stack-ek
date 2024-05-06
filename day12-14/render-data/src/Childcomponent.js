import React ,{createContext, useContext} from "react";

const Initialcontext = createContext("Initialvalue");
function Childcomponent()
{
    const valuecontext =useContext(Initialcontext);
    return (<><h1>{valuecontext}</h1>

   </>)
}
export default Childcomponent;