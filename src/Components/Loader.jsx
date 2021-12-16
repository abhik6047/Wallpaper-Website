import React from 'react'
import logo from './loaderAnimation.gif';

export default function Loader() {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <img src={logo} alt="Loading" width={100} height={100}/>
        </div>
    )
}
