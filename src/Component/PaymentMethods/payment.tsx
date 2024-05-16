// import React, { useEffect, useState } from 'react'
// import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import axios from 'axios'
// require('./Components CSS/index.css');

// function Payment() {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()



//     useEffect(() => {
//         // Check if stripe and elements are initialized before usage
//         if (!stripe || !elements) {
//             return;
//         }
//     }, [stripe, elements]);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
//         e.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }
        
//         const cardElement = elements.getElement(CardNumberElement);
// const cardExpiryElement = elements.getElement(CardExpiryElement);
// const cardCvcElement = elements.getElement(CardCvcElement);
// if (!cardElement || !cardExpiryElement || !cardCvcElement) {
//     return;
// }
// const cardElementCombined = elements.create('card' as 'card', {
//     elements: [cardElement, cardExpiryElement, cardCvcElement],
//     hidePostalCode: true,
// });


//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: cardElementCombined
//         })
//          useEffect(() => {
//         // Check if stripe and elements are initialized before usage
//         if (!stripe || !elements) {
//             return;
//         }
//     }, [stripe, elements]);


//         if(!error){
//             try {
//                 const {id} = paymentMethod
//                 const response = await axios.post("http://localhost:4000/payment", {
//                     amount: 10000,
//                     id
//                 })

//                 if(response.data.success){
//                     console.log("Successful Payment")
//                     setSuccess(true)
//                 }

//             } catch (error) {
//                 console.log("Error", error)
//             }
//         }else {
//             console.log(error.message)
//         }
//     }
//     // const CARD_OPTIONS = {
//     //     iconStyle: "default",
//     //     style: {
//     //         base: {
//     //             iconColor: "#c4f0ff",
//     //             color: "black",
//     //             fontWeight: 500,
//     //             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//     //             fontSize: "16px",
//     //             fontSmoothing: "antialiased",
//     //             ":-webkit-autofill": { color: "black" },
//     //             "::placeholder": { color: "black" }
//     //         },
//     //         invalid: {
//     //             iconColor: "#ffc7ee",
//     //             color: "black"
//     //         }
//     //     }
//     // }
//     const CARD_OPTIONS = {
//         style: {
//             base: {
//                 iconColor: "#c4f0ff",
//                 color: "black",
//                 fontWeight: 500,
//                 fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//                 fontSize: "16px",
//                 fontSmoothing: "antialiased",
//                 ":-webkit-autofill": { color: "black" },
//                 "::placeholder": { color: "black" }
//             },
//             invalid: {
//                 iconColor: "#ffc7ee",
//                 color: "black"
//             }
//         }
//     };
// //     const CARD_OPTIONS = {
// //     style: {
// //         base: {
// //             iconColor: '#666',
// //             color: '#31325F',
// //             fontWeight: 300,
// //             fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
// //             fontSize: '16px',
// //             fontSmoothing: 'antialiased',
// //             ':-webkit-autofill': { color: '#fce883' },
// //             '::placeholder': { color: '#ccc' },
// //         },
// //         invalid: {
// //             color: '#e5424d',
// //             ':focus': {
// //                 color: '#303238',
// //             },
// //         },
// //     },
// //     iconStyle: 'default' // Set the iconStyle to one of the allowed values
// // };
//   return (
//     <>
//     {!success ? 
//     <form onSubmit={handleSubmit}>
//         <fieldset className='FormGroup'>
//             <div className="FormRow">
//                 <CardNumberElement options={CARD_OPTIONS} />
//             </div>
//         </fieldset>
//         <fieldset className='FormGroup'>
//             <div className="FormRow">
//                 <CardExpiryElement options={CARD_OPTIONS} />
//             </div>
//         </fieldset>
//         <fieldset className='FormGroup'>
//             <div className="FormRow">
//                 <CardCvcElement options={CARD_OPTIONS} />
//             </div>
//         </fieldset>
//         <button>Pay</button>
//     </form>
//     :
//     <div className="payment-success">
//         <h2>Payment successful</h2>
//         <h3 className='Thank-you'>Thank you for your patronage</h3>
//     </div>
// }
// </>
//   )
// }

// export default Payment;


import React, { useEffect, useState } from 'react';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

function Payment() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Check if stripe and elements are initialized before usage
        if (!stripe || !elements) {
            return;
        }
    }, [stripe, elements]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        if (!cardElement || !cardExpiryElement || !cardCvcElement) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post('http://localhost:3000/payment', {
                    amount: 10000,
                    id,
                });

                if (response.data.success) {
                    console.log('Successful Payment');
                    setSuccess(true);
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log(error.message);
        }
    };

    const CARD_OPTIONS = {
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: 'black',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': { color: 'black' },
                '::placeholder': { color: 'black' },
            },
            invalid: {
                iconColor: '#ffc7ee',
                color: 'black',
            },
        },
    };

    return (
        <>
            {!success ? (
                <form onSubmit={handleSubmit} style={{ marginTop: '20px',width:400 }}>
                    <fieldset style={{ marginBottom: '20px' }}>
                        <div>
                            <CardNumberElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <fieldset style={{ marginBottom: '20px' }}>
                        <div>
                            <CardExpiryElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <fieldset style={{ marginBottom: '20px' }}>
                        <div>
                            <CardCvcElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button type='submit' style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Pay</button>
                </form>
            ) : (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2>Payment successful</h2>
                    <h3>Thank you for your patronage</h3>
                </div>
            )}
        </>
    );
}

export default Payment;
