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
    const [checked,setChecked]=useState(false);
    
    const handleChangeHandler=()=>{
        setChecked(!checked)
    }
    const onShowBioHandler=()=>{
        setshowBio(!showBio)
        setshowLang(false)
        setshowJob(false)
        setshowProg(false)
        setshowEdu(false)
    }
    const onShowLangHandler=()=>{
        setshowLang(!showLang) 
        setshowBio(false)
        setshowJob(false)
        setshowProg(false)
        setshowEdu(false)
      }
    const onShowProgHandler=()=>{
        setshowProg(!showProg)
        setshowLang(false) 
        setshowBio(false)
        setshowJob(false)
        setshowEdu(false)
    }
    const onShowEduHandler=()=>{
        setshowEdu(!showEdu) 
        setshowProg(false)
        setshowLang(false) 
        setshowBio(false)
        setshowJob(false)
      }
    const onShowJobHandler=()=>{
        setshowJob(!showJob) 
        setshowEdu(false) 
        setshowProg(false)
        setshowLang(false) 
        setshowBio(false)
      }

    return(
        <Contexto.Provider value={{showBio,showJob,showLang,showProg,showEdu,checked,
         onShowBio:onShowBioHandler,
         onShowLang:onShowLangHandler,
         onShowProg:onShowProgHandler,
         onShowEdu:onShowEduHandler,
         onShowJob:onShowJobHandler,
         handleChange:handleChangeHandler,

         }}>
            {props.children}
        </Contexto.Provider>
    )
}

export default Contexto