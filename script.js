const parentEls = document.querySelectorAll('.relative');
const btnToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
parentEls.forEach(item => {
  item.addEventListener('mouseover', function (e) {
    if (e.target.parentElement.classList.contains('relative')) {
      e.target.parentElement.lastElementChild.style.display = 'block';
    }
  });
});

parentEls.forEach(item => {
  item.addEventListener('mouseout', function (e) {
    if (e.target.parentElement.classList.contains('relative')) {
      e.target.parentElement.lastElementChild.style.display = 'none';
    }
  });
});

btnToggle.addEventListener('click', function () {
  navMobile.classList.toggle('toggle');
});
