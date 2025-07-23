// Currency quote of the day
const USD = 5.57
const EUR = 6.54
const GBP = 7.53

const amount = document.getElementById("amount");

// Manipulating the input amount to receive only numbers.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

