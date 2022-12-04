const parentEls = document.querySelectorAll('.relative');
const span = document.querySelector('.tooltip');
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
