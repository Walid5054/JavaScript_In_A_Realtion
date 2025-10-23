document
  .getElementById("cash-out-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById("cashout-pin").value;
    const pin1 = parseInt(pinNumber);
    const mainBalance = document.getElementById("amount").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pinNumber) {
      if (pin1 == 1234) {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("amount").innerText = sum;
      }
    } else {
      alert("need a valid pin");
    }
  });
