



export default function calculateTip() {


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
