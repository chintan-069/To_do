import { PrimaryButton, TextField } from '@fluentui/react'
// import React from 'react'

function Sendmail() {


  
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',gap:20 }}> Sendmail
        <div style={{display:'flex',flexDirection:'column',alignItems: 'center',gap:20,}}>

          {/* <input type='text' ></input><br></br>
           <input type='text' ></input> */}
          <TextField placeholder='@gmail.com' style={{width: 300,height:30 }} ></TextField>
          <PrimaryButton text='Send' name='sendmail' style={{width:100,height:30,color: 'black',border:'inset 15px #55a9ff',fontSize:16}}></PrimaryButton>
           
        </div>

      </div>
    </>
  )
}

export default Sendmail



// 'rwez mcov wtyl oelp'