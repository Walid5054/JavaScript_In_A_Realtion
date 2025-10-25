document
  .getElementById("cash-out-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputbyId("cashout-amount");
    const pinNumber = getInputbyId("cashout-pin");
    const mainBalance = getInnerTextById("amount");
    if (amount && pinNumber) {
      const sum = mainBalance - amount;
      setInnerText("amount", sum);
    } else {
      alert("need a valid pin");
    }
  });
function getInputbyId(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
