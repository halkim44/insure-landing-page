let hamburgerNav = document.querySelector('#js-nav-toggle');
function activateWithClass(btn) {
  var htmlTag = document.querySelector('html');
  btn.classList.toggle('is-active');
  htmlTag.classList.toggle(`j-${btn.dataset.actionType}`);
  console.log(`j-${btn.dataset.actionType}`)
}
hamburgerNav.addEventListener('click', (e) => activateWithClass(e.currentTarget));
