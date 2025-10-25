document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("addMoney", "none");
    handleToggle("cashout", "none");
    handleToggle("transaction", "block");
  });
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
