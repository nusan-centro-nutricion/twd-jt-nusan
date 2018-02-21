document.addEventListener('DOMContentLoaded', function (event) {
  // Is this browser sufficiently modern to continue?
  if (!('querySelector' in document && 'addEventListener' in window && 'getComputedStyle' in window)) {
    () => { return }
  }

  window.document.documentElement.className += ' enhanced'

  var nav = document.querySelector('#main-menu')
  var navToggle = document.querySelector("#main-menu a[href='#menu']")

  if (navToggle) {
    navToggle.addEventListener('click',
      function (e) {
        if (nav.className === 'header__menu--global is-open') {
          nav.className = 'header__menu--global'
        } else {
          nav.className = 'header__menu--global is-open'
        }
        e.preventDefault()
      }, false)
  }

  var uls = document.querySelectorAll('main article ul')
  for (let ul of uls) {
    ul.classList.add('fa-ul')
  }

  var lis = document.querySelectorAll('main article ul li')
  for (let li of lis) {
    let fali = document.createElement('span')
    fali.classList.add('fa-li')

    let fa = document.createElement('i')
    fa.classList.add('fas', 'fa-check')
    fali.appendChild(fa)
    li.appendChild(fali)
  }
})
