document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("number-field").value;
    const pinNumber = document.getElementById("pin-field").value;
    const pin = parseInt(pinNumber);
    if (accountNumber.length == 11) {
      if (pin == 1234) {
        window.location.href = "./main.html";
      }
    } else {
      alert("need a valid account");
    }
  });
