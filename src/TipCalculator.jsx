import './style.css'
import { useRef,useState } from 'react';
import { useState } from 'react';




export default function TipCalculator() {

    let billElement = useRef();
    let tipElement = useRef();

    let [billAmount, setBillAmount] = useState(0);
    let [tipPercentage, setTipPercentage] = useState(0);

    function updateBillAmount() {
        setBillAmount( parseFloat( billElement.current.value ));
    }
    function updateTipAmount() {
        setTipPercentage( parseFloat(tipElement.current.value));
    }

    
    let result = (
        <div>
            Please enter a valid amount for bill amount and tip percentage!
        </div>
    )
     
    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {

        let tipAmount = (billAmount * tipPercentage) / 100;
        result = (
            <div>
                <p>Tip Amount: {tipAmount.toFixed(2)}</p>
                <p>Total Amount: {(billAmount+tipAmount).toFixed(2)}</p>
            </div>
        )
    }


    return (

        <>

            <div>
                <img src="https://imgs.search.brave.com/4SyI1wDj0Ys5siRslqcHuRs8QZHTpr_vbGx8lVM_ALI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZGFpbHltZWFs/LmNvbS9pbWcvZ2Fs/bGVyeS9ncmF0dWl0/eS1ndWlkZS1ob3ct/bXVjaC10by10aXAt/c2VydmVycy1kZWxp/dmVyeS1kcml2ZXJz/LWFuZC1tb3JlL2lT/dG9jay0xMDQ0MTc3/ODEwLmpwZw" />
            </div>

            <div id="calculator">
                <h2>Tip Calculator</h2>
                <label htmlFor="billAmount">Bill Amount:</label>
                <input onChange={updateBillAmount} type="number" ref={billElement} placeholder="Enter the bill amount" />

                <label htmlFor="tipPercentage">Tip Percentage:</label>
                <input onChange={updateTipAmount} type="number" ref={tipElement} placeholder="Enter the tip percentage" />

                {result}
            </div>
            <div>
      <label htmlFor="guestAmount">Amount of Guests</label>
      <select
        name="guestAmount"
        value={guestAmount}
        onChange={handleGuestChange}
      >

      </select>
      <br />
      <label htmlFor="serviceQuality">Service Quality</label>
      <br />
      <select
        name="serviceQuality"
        value={serviceQuality}
        onChange={handleServiceChange}
      >
        <option value="">Select service quality</option>
        <option value="1">1 - It was poor Service</option>
        <option value="2">2 - It could've been better</option>
        <option value="3">3 - It was okay</option>
        <option value="4">4 - It was Great!</option>
        <option value="5">5 - The best service in town!</option>
      </select>
      <br />
    </div>
        </>
    );
}
           

 {
    let [guestAmount, setGuestAmount] = useState('');
     let [serviceQuality, setServiceQuality] = useState('');

let handleGuestChange = (event) => {
    setGuestAmount(current.target.value);
  };

  let handleServiceChange = (event) => {
    setServiceQuality(current.target.value);
  
  };

 };
 
 
