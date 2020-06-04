  function getCookie() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var cookie = cookie.split('=');
      if (cookie[0] === 'browserClick') {
        alert(`The value of ${cookie[0]} is ${cookie[1]}`);
        return true;
      }
    }
  }

  function setCookie(e_l) {
    document.cookie = `browserClick=${e_l}`;
  }
  document.querySelectorAll('.nav li a').forEach(function (el) {
    el.addEventListener("click", function () {
      if (!getCookie()) setCookie(this.innerText);
    });
  });