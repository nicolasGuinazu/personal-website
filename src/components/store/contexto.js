import { useState } from "react";
import React from "react";
const Contexto=React.createContext({
    show:false,
    onShow:()=>{}
});
export const ContextoProvider=(props)=>{
    const [show,setShow]=useState(false);
    const onShowHandler=()=>{
      setShow(!show) 
    }
    return(
        <Contexto.Provider value={{show:show, onShow:onShowHandler}}>
            {props.children}
        </Contexto.Provider>
    )
}

export default Contexto