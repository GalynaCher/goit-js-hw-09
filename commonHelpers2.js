import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.elements.email,m=t.elements.message,a="EmailValue",l="MessageValue";o.value=localStorage.getItem(a);m.value=localStorage.getItem(l);t.addEventListener("input",e=>{e.target.nodeName==="INPUT"?localStorage.setItem(a,e.target.value):e.target.nodeName==="TEXTAREA"&&localStorage.setItem(l,e.target.value)});t.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(a),localStorage.removeItem(l),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
