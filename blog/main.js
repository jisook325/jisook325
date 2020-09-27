
const tooglebtn = document.querySelector('.gnb_tooglebtn');
const menu = document.querySelector('.gnb_menu');
const links = document.querySelector('.gnb_links');


tooglebtn.addEventListener('click', () => {
  menu.classList.toogle('active');
  links.classList.toogle('active');
});
