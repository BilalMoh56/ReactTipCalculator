import './style.css'



function calculateTip() {


    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
        let tipAmount = (billAmount * tipPercentage) / 100;
        let totalAmount = billAmount + tipAmount;

        document.getElementById('result').innerHTML = `
            <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
            <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
    } else {
        alert('Please enter valid numbers for Bill Amount and Tip Percentage.');
    }
}

export default function TipCalculator() {

    return (

    <>

    <div>
        <img src="https://imgs.search.brave.com/4SyI1wDj0Ys5siRslqcHuRs8QZHTpr_vbGx8lVM_ALI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZGFpbHltZWFs/LmNvbS9pbWcvZ2Fs/bGVyeS9ncmF0dWl0/eS1ndWlkZS1ob3ct/bXVjaC10by10aXAt/c2VydmVycy1kZWxp/dmVyeS1kcml2ZXJz/LWFuZC1tb3JlL2lT/dG9jay0xMDQ0MTc3/ODEwLmpwZw"/>
    </div>

    <div id="calculator">
        <h2>Tip Calculator</h2>
        <label htmlFor="billAmount">Bill Amount:</label>
        <input type="number" id="billAmount" placeholder="Enter the bill amount"/>

        <label htmlFor="tipPercentage">Tip Percentage:</label>
        <input type="number" id="tipPercentage" placeholder="Enter the tip percentage"/>

        <button onClick={calculateTip}>Calculate Tip</button>

        <div id="result"></div>
    </div>

    </>
    );
}
