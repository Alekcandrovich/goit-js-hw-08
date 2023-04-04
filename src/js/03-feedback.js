const form = document.querySelector('.feedback-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    form.reset();

    form.elements.email.focus();
});

form.addEventListener('input', _.throttle(e => {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}, 500));

const saveFeedbackFormState = localStorage.getItem('feedback-form-state');

if (saveFeedbackFormState) {
    const { email, message } = JSON.parse(saveFeedbackFormState);
    form.elements.email.value = email;
    form.elements.message.value = message;
};