!function(){var e=document.querySelector(".feedback-form");e.addEventListener("submit",(function(a){a.preventDefault();var t={email:e.elements.email.value,message:e.elements.message.value};console.log(t),localStorage.removeItem("feedback-form-state"),e.reset(),e.elements.email.focus()})),e.addEventListener("input",_.throttle((function(a){var t={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));var a=localStorage.getItem("feedback-form-state");if(a){var t=JSON.parse(a),l=t.email,s=t.message;e.elements.email.value=l,e.elements.message.value=s}}();
//# sourceMappingURL=03-feedback.fca348f3.js.map
