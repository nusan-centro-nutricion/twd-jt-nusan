document.addEventListener('DOMContentLoaded', function (event) {
  // Is this browser sufficiently modern to continue?
  if (!('querySelector' in document && 'addEventListener' in window && 'getComputedStyle' in window)) {
    () => { return }
  }

  var uls = document.querySelectorAll('main section:not(.hero) ul')
  for (let ul of uls) {
    ul.classList.add('fa-ul')
  }

  var lis = document.querySelectorAll('main section:not(.hero) li')
  for (let li of lis) {
    let fali = document.createElement('span')
    fali.classList.add('fa-li')

    let fa = document.createElement('i')
    fa.classList.add('fas', 'fa-check')
    fali.appendChild(fa)
    li.appendChild(fali)
  }
})
