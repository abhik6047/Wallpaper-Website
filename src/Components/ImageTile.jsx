import React from 'react'

export default function ImageTile({imageSrc}) {
    return (
        <div style={{backgroundImage: `url("${imageSrc}")`, backgroundSize:"cover", backgroundPosition:"center", width:"330px", height:"230px", margin:"20px", boxShadow:"1px 1px 15px #7c7b7b"}}>
            
        </div>
    )
}
