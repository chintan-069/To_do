import React from 'react'
import Errors from './images/Erros.svg'
const Erros = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: 400, top: 40, fontWeight: 600, fontSize: 40 }}>

                <img src={Errors} style={{marginTop:200}} height={600} width={600} alt="404 not found" />
                 
                </div>
            </div>
        </>
    )
}

export default Erros