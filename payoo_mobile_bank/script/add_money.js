document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount-field").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById("pin").value;
    const pin1 = parseInt(pinNumber);
    if (amount < 0) {
      alert("nov valid");
      return;
    }
    const mainBalance = document.getElementById("amount").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pinNumber) {
      if (pin1 == 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("amount").innerText = sum;
        const container = document.getElementById("transactionContainer");
        const p = document.createElement("p");
        p.innerText = `added ${amount}`;
        container.appendChild(p);
      }
    } else {
      alert("need a valid pin");
    }
  });
