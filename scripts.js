// Currency quote of the day
const USD = 5.57;
const EUR = 6.54;
const GBP = 7.53;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

// Function to convert currency.
function convertCurrency(amount, price, symbol) {
  try {
    // Displaying the quote for the selected currency.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calculate the total.
    let total = amount * price;

    // Check if the result is not a number
    if (isNaN(total)) {
      return alert("Por favor, digite o valor correspondente para converter.");
    }

    // Format the total value.
    total = formatCurrencyBRL(total).replace("R$", "");

    // Displays the total result.
    result.textContent = `${total} Reais`;

    //Applies the class that displays the footer to show the result.
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);

    // Removes the footer class, hiding it from the screen.
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

// Formats the currency in Brazilian Real
function formatCurrencyBRL(value) {
  // Convert to number to use toLocaleString to format in BRL (R$ 00.00) standard.
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
