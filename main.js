const selectElement=(e)=> document.querySelector(e);



selectElement('.mobile-menu').addEventListener('click',()=>{
  selectElement('header').classList.toggle('active');
})