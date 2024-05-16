import { PrimaryButton } from '@fluentui/react'
// import { relative } from 'path'
// import React from 'react'

const Header = (props:any) => {

 const handleAdd =() =>{
  console.log('add employee..')
    props.setisAdding(true);
 }

  return (
    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}> 
     <h1>Employee Management List </h1>
     <div>

    <PrimaryButton text='Add Employe ' onClick={handleAdd} style={{border:'outset 18px #a4b3ff', color:'black',fontSize:16,fontWeight:900}}/>
     </div>
        

    </div>
    </>
  )
}

export default Header