document.addEventListener("DOMContentLoaded", function(event) {
  // Is this browser sufficiently modern to continue?
  if ( !( "querySelector" in document && "addEventListener" in window && "getComputedStyle" in window) ) {
    () => {return}
  }

  var fali = document.createElement('span')
  fali.classList.add('fa-li')

  var fa = document.createElement('i')
  i.classList.add('fas')
  i.classList.add('fa-check')
  fali.appenfChild(fa)

  var uls = document.querySelectorAll('ul')
  for (let ul of uls) {
    ul.classList.add('fa-ul')
  }

  var lis = document.querySelectorAll('li')
  for (let li of lis) {
    li.appenfChild(fali)
  }


})
