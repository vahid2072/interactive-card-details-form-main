// hide form and diplay thank you message after button click

const hideForm = document.querySelector(".hide-form");
const succesfulSumbit = document.querySelector(".succesful-sumbit");
const sumbitBtn = document.querySelector(".submit-btn");

sumbitBtn.addEventListener("click", () => {
  hideForm.style.display = "none";
  succesfulSumbit.style.display = "block";
  sumbitBtn.textContent = "Continue";
});

// change text when user fills form

const userNameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("number");
const expMonthInput = document.getElementById("exp-date-month");
const expYearInput = document.getElementById("exp-date-year");
const cvcNumberInput = document.getElementById("cvc-number");

const cardBackTextElement = document.querySelector(".card-back-text");
const cardNumberElement = document.querySelector(".card-number");
const userNameElement = document.querySelector(".user-name");
const dateMonthElement = document.querySelector(".date-month");
const dateYearElement = document.querySelector(".date-year");

const cardNumberError = document.querySelector(".card-number-error");
const userNumberError = document.querySelector(".user-name-error");
const dateError = document.querySelector(".date-error");
const dateYearError = document.querySelector(".date-year-error");
const cvcError = document.querySelector(".cvc-error");

userNameInput.addEventListener("input", updateUserName);
cardNumberInput.addEventListener("input", updateCardNumber);
userNameElement.addEventListener("input", updateUserName);
expMonthInput.addEventListener("input", updateDateMonth);
expYearInput.addEventListener("input", updateDateYear);
cvcNumberInput.addEventListener("input", updateCvcNumber);

// regex
const regex = /\d+$/;
const monthRegex = /^(0?[1-9]|1[0-2])$/;
const yearRegex = /^(24|25|26|27|28|29|30)$/;

// validate name in uppercase and number is invalid
function updateUserName() {
  let inputText = userNameInput.value;
  if (regex.test(inputText)) {
    userNumberError.style.display = "block";
  } else {
    userNumberError.style.display = "none";
  }
  userNameElement.textContent = inputText.toUpperCase();
}

// validate card number, number is accepted
function updateCardNumber() {
  let inputText = cardNumberInput.value;
  const formattedText = formatCardNumber(inputText);
  if (!regex.test(formattedText)) {
    cardNumberError.style.display = "block";
  } else {
    cardNumberError.style.display = "none";
  }
  cardNumberElement.textContent = formattedText;
}

// add spaces between every 4 digits
function formatCardNumber(inputText) {
  return inputText.match(/.{1,4}/g)?.join(" ") || "";
}

// validate month with regular expression, input must be between 1 to 12
function updateDateMonth() {
  let inputNum = expMonthInput.value;
  dateMonthElement.textContent = inputNum;
  if (!monthRegex.test(inputNum)) {
    dateError.style.display = "block";
  } else {
    // add 0 to 1 digit numbers
    let formattedMonth = (inputNum < 10 && inputNum === 0) ? '0' + inputNum : inputNum;
    dateMonthElement.textContent = formattedMonth;
    dateError.style.display = "none";
  }
}

// validate year with regular expression, input must be between 24 to 30
function updateDateYear() {
  let inputYear = expYearInput.value;
  dateYearElement.textContent = inputYear;
  if (!yearRegex.test(inputYear)) {
    dateYearError.style.display = "block";
  } else {
    dateYearError.style.display = "none";
  }
}

// validate cvc number, number is accepted
function updateCvcNumber() {
  let inputCvc = cvcNumberInput.value;
  if (!regex.test(inputCvc)) {
    cvcError.style.display = "block";
  } else {
    cvcError.style.display = "none";
  }
  cardBackTextElement.textContent = inputCvc;
}
