const form = document.querySelector('.feedback-form');
const emailLine = form.elements.email;
const messageLine = form.elements.message;

form.addEventListener('submit', e => {
  e.preventDefault();

  if (emailLine.value && messageLine.value) {
    const formData = { email: emailLine.value, message: messageLine.value };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    emailLine.focus();
  } else {
    alert('Пожалуйста, заполните все обязательные поля!');
  }
});

form.addEventListener('input', _.throttle(e => {
    const formData = { email: emailLine.value, message: messageLine.value };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

const saveFeedbackFormState = localStorage.getItem('feedback-form-state');

if (saveFeedbackFormState) {
  const { email, message } = JSON.parse(saveFeedbackFormState);
  emailLine.value = email;
  messageLine.value = message;
} else {
  emailLine.focus();
}