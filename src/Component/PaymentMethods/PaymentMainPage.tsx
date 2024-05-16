import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from './payment';
import { useState } from 'react';
// import PaymentMainPage from './PaymentMainPage';


const stripePromise = loadStripe("pk_test_51LjHWKJ")
function PaymentsMainPage() {
  const [showForm, setShowForm] = useState(false)
  
  
  return (
    <Elements stripe={stripePromise}>
        {/* <Payment /> */}
                {showForm ? <Payment /> : <><h3>$100.00</h3> <button onClick={()=>{setShowForm(true)}}>BUY</button></>}


    </Elements>
  )
}

export default PaymentsMainPage