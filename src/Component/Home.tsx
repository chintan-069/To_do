
import website from './images/website.svg'
import '../Component/Components CSS/Home.css';
import { useState } from 'react';
// import PaymentsMainPage from './PaymentMethods/PaymentMainPage';

const Home = () => {
  // const {Hello} =props
  const [showForm, setShowForm] = useState(false)
  return (
    <>
     

      <div className='website-image' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

         <h1>Welcome </h1>
        <img src={website} alt=""  />
        {/* {showForm ? <PaymentsMainPage /> : <><h3>$100.00</h3> <button onClick={()=>setShowForm(true)}>BUY</button></>} */}
      </div>





      
    </>
  )
}

export default Home