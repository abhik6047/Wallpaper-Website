import React, { useState } from 'react'

export default function Navbar({fetchData}) {

    let [srch, setSrch] = useState("")


    return (
        <nav style={{width:'100%',boxShadow:"1px 1px 15px #ddd",backgroundColor:"#FDFCE5"}}>
            <div style={{padding:"10px 30px", fontSize:"18pt", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                Snaps 
                    <div>
                        <input type="text" onChange={(e)=>{setSrch(e.target.value)}} placeholder="Search Snaps" style={{fontSize:"12pt",borderRadus:"5px"}} />
                        <button style={{backgroundColor:"#87A7B3",color:"white",fontSize:"12pt",padding:"2px 8px", marginLeft:"10px",borderRadius:"5px",}} onClick={()=>{fetchData(srch)}} >Search</button>
                    </div>
            </div>
        </nav>
    )
}
