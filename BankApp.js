let heading = document.createElement("h1");
heading.id = "heading";
heading.textContent = "Bank";
heading.style.textAlign = "center";
heading.style.marginTop = "150px";
heading.style.fontSize = "50px";

let heading1 = document.createElement("h2");
heading1.id = "heading-1";
heading1.textContent = "Amount Withdraw and Deposit";
heading1.style.marginLeft = "400px";
heading1.style.fontSize = "40px";

let amount = document.createElement("input");
amount.id = "number";
amount.setAttribute("type", "text");
amount.style.marginLeft = "25px";
amount.style.width = "220px";
amount.placeholder = "Enter Amount to Deposit/Withdraw";
amount.style.textAlign = "center";

let bold = document.createElement("b");
bold.id = "b";
bold.textContent = "Enter your amount : ";
bold.style.marginLeft = "500px";
bold.style.fontSize = "20px";

let withdraw = document.createElement("button");
withdraw.id = "withdraw";
withdraw.textContent = "withdraw";
withdraw.style.marginLeft = "600px";
withdraw.style.fontSize = "18px";
withdraw.style.backgroundColor = "red";

let deposit = document.createElement("button");
deposit.id = "deposit";
deposit.textContent = "deposit";
deposit.style.marginLeft = "50px";
deposit.style.fontSize = "18px";
deposit.style.backgroundColor = "lightgreen";

let existingAmount = document.createElement("p");
existingAmount.id = "amount";
existingAmount.textContent = 1000;
existingAmount.style.marginLeft = "750px";
existingAmount.style.fontSize = "25px";

document.body.append(heading);
document.body.append(heading1);
document.body.append(bold);
document.body.append(amount);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(withdraw);
document.body.append(deposit);
document.body.append(existingAmount);

deposit.addEventListener("click", function () {
  let amountEntered = amount.value;
  let existingAmountValue = existingAmount.textContent;
  existingAmount.textContent = +existingAmountValue + +amountEntered;
});

withdraw.addEventListener("click", function () {
  let amountEntered = amount.value;
  let existingAmountValue = existingAmount.textContent;
  if (amountEntered <= existingAmountValue) {
    existingAmount.textContent = +existingAmountValue - +amountEntered;
    if (existingAmount.textContent <= 500) {
      existingAmount.textContent = "Amount Less than 500";
      withdraw.disabled = true;
    }
  } else {
    existingAmount.textContent = "InSufficient Balance";
    withdraw.disabled = true;
  }
});
