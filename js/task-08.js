const form = document.querySelector("form");

function handleSubmitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Всі поля повинні бути заповненими`);
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmitForm);
