let menu_bar = document.querySelector('.menu-bar');
let btn_menu = document.querySelector('.btn-menu');
btn_menu.addEventListener('click',()=>{
  menu_bar.classList.toggle('active');
});
