// Vamos validar o email do cliente//
function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error(`Email Inválido! `);
    err.input = `email`;
    throw err;
  }
}
//Vamos validar a senha (Password)//
function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  );
  {
    const err = new Error(`Senha Inválida`);
    err.input = `password`;
    throw err;
  }
}
//Vamos agora resetar os campos de email e senha para que ao recarregarmos a página esses campos serão limpos.//
function resetFromStyles() {
  Object.entries(userInputs).forEach(([key, value]) => {
    value.classList.remove(`sucess`, `error`);
    document.querySelector(`#${key}-error`).textContent = ``;
  });
}
const userInputs = {};
userInputs.name = document.querySelector(`#name`);
userInputs.email = document.querySelector(`#email`);
userInputs.password = document.querySelector(`#password`);

//Vamos agora pegar o ID do elemento form//
const form = document.querySelector(`form`);

//Vamos agora adicionar o evento no button para submeter a aplicação e toda a programação feita ser executada.//
form.addEventListener(`submit`, (ev) => {
  ev.preventDefault();
  resetFromStyles();

  try {
    userInputs.name.classList.add(`success`);
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add(`success`);
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add(`success`);
  } catch (err) {
    userInputs[err.input].classList.add(`error`);
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
