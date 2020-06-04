document.querySelectorAll('a[href="/signup"').forEach(function (evt) {
  evt.addEventListener('click', function (el) {
    let loc = this.querySelector('span').getAttribute('data-position');
    alert(`Clicked button: ${loc}`);
  });
});