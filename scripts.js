// Currency quote of the day
const USD = 5.57;
const EUR = 6.54;
const GBP = 7.53;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulating the input amount to receive only numbers.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturing the form's submit event.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

// Function to convert currency.
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
