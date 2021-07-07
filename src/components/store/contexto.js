import { useState } from "react";
import React from "react";
const Contexto=React.createContext({
    show:false,
    onShow:()=>{}
});
export const ContextoProvider=(props)=>{
    const [showBio,setshowBio]=useState(false);
    const [showJob,setshowJob]=useState(false);
    const [showLang,setshowLang]=useState(false);
    const [showProg,setshowProg]=useState(false);
    const [showEdu,setshowEdu]=useState(false);

    const onShowBioHandler=()=>{
        setshowBio(!showBio) 
    }
    const onShowLangHandler=()=>{
        setshowLang(!showLang) 
      }
    const onShowProgHandler=()=>{
        setshowProg(!showProg) 
    }
    const onShowEduHandler=()=>{
        setshowEdu(!showEdu) 
      }
    const onShowJobHandler=()=>{
        setshowJob(!showJob) 
      }

    return(
        <Contexto.Provider value={{showBio,showJob,showLang,showProg,showEdu,
         onShowBio:onShowBioHandler,
         onShowLang:onShowLangHandler,
         onShowProg:onShowProgHandler,
         onShowEdu:onShowEduHandler,
         onShowJob:onShowJobHandler

         }}>
            {props.children}
        </Contexto.Provider>
    )
}

export default Contexto