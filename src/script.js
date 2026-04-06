function calculateFinance() {
    const val = document.getElementById('inputVal').value;
    const result = document.getElementById('displayResult');
    
    if(val > 0) {
        // Example: Simple 10% Savings Logic
        let savings = val * 0.10;
        result.innerHTML = `Suggested Savings: ₹${savings}`;
    } else {
        alert("Please enter a valid amount");
    }
}
