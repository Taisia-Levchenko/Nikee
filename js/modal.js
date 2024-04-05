const refsForm = {
   openModalBtnForm: document.querySelector("[data-open-form-modal]"),
   closeModalBtnForm: document.querySelector("[data-close-form-modal]"),
   backdropForm: document.querySelector(".backdrop"),
 };




 refsForm.openModalBtnForm.addEventListener("click", toggleModalForm);
 refsForm.closeModalBtnForm.addEventListener("click", toggleModalForm);


 function toggleModalForm() {
   refsForm.backdropForm.classList.toggle("is-hidden");
  
   if(document.body.style.overflow == 'hidden'){
     document.body.style.overflow = 'visible';
   }
   else{
     document.body.style.overflow = 'hidden';
   }
 }