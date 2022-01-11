import throttle from 'lodash.throttle';
const refs = {
  formEl: document.querySelector('form'),
  emailEl: document.querySelector('input'),
  textEreaEl: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';
const dataToLS = {
  email: '',
  message: '',
};

const start = function () {
  const dataFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!dataFromLS) {
    return;
  }
  refs.emailEl.value = dataFromLS.email;
  refs.textEreaEl.value = dataFromLS.message;
};
start();

refs.formEl.addEventListener(
  'input',
  throttle(e => {
    if (e.target === refs.emailEl) {
      dataToLS.email = e.target.value;
      // console.log(dataToLS)
    }

    if (e.target === refs.textEreaEl) {
      dataToLS.message = e.target.value;
    }

    // console.log(dataToLS);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToLS));
  }, 500),
);

// console.log(dataToLS)

refs.formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const dataFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(dataFromLS)
  refs.formEl.reset()
  localStorage.removeItem(LOCALSTORAGE_KEY)
})