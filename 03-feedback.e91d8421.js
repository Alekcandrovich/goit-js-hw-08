const e=document.querySelector(".feedback-form");e.addEventListener("submit",(t=>{t.preventDefault();const a={email:e.elements.email.value,message:e.elements.message.value};console.log(a),localStorage.removeItem("feedback-form-state"),e.reset(),e.elements.email.focus()})),e.addEventListener("input",_.throttle((t=>{const a={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))}),500));const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:s}=JSON.parse(t);e.elements.email.value=a,e.elements.message.value=s}
//# sourceMappingURL=03-feedback.e91d8421.js.map
