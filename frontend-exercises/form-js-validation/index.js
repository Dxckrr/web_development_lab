const firstName = document.getElementById("name");
const surname = document.getElementById("surname");
const id_number = document.getElementById("id_number");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.querySelector("form");

const showError = (input) => {
  const errorElement = document.getElementById(`${input.id}_err`);
  if (errorElement?.classList.contains("d-none")) {
    errorElement.classList.remove("d-none");
  }
};

const hideError = (input) => {
  const errorElement = document.getElementById(`${input.id}_err`);
  if (errorElement && !errorElement.classList.contains("d-none")) {
    errorElement.classList.add("d-none");
  }
};

const validateName = (input) => {
  const regex = /^[a-zA-Z]+$/;
  regex.test(input.value) ? hideError(input) : showError(input);
};

const validateIdNumber = (input) => {
  const regex = /^[0-9]{6}$/;
  regex.test(input.value) ? hideError(input) : showError(input);
};

const validatePhone = (input) => {
  const regex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
  regex.test(input.value) ? hideError(input) : showError(input);
};

const validateEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  regex.test(input.value) ? hideError(input) : showError(input);
};

const validatePassword = (input) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  regex.test(input.value) ? hideError(input) : showError(input);
};

const validateAddress = (input) => {
  input.value.length <= 80 ? hideError(input) : showError(input);
};

const validateForm = () => {
  validateName(firstName);
  validateName(surname);
  validateIdNumber(id_number);
  validateAddress(address);
  validatePhone(phone);
  validateEmail(email);
  validatePassword(password);
};

const onSubmit = (e) => {
  e.preventDefault();

  validateForm();

  const formData = {
    firstName: firstName.value,
    surname: surname.value,
    id_number: id_number.value,
    address: address.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  console.log("data:", formData);
};

form.addEventListener("submit", onSubmit);
