// Currency quote of the day
const USD = 5.57;
const EUR = 6.54;
const GBP = 7.53;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

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
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

// Function to convert currency.
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`

    //Applies the class that displays the footer to show the result.
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);

    // Removes the footer class, hiding it from the screen.
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}
