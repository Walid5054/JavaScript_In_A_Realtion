handleToggle("cashout", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  // document.getElementById("cashout").style.display = "none";
  // document.getElementById("addMoney").style.display = "block";
  handleToggle("addMoney", "block");
  handleToggle("cashout", "none");
  handleToggle("transaction", "none");
});
document.getElementById("cash-out").addEventListener("click", function () {
  handleToggle("addMoney", "none");
  handleToggle("cashout", "block");
  handleToggle("transaction", "none");
});
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
