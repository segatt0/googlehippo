var hippoMouse = document.querySelector('.refH1');
var hippoImg = document.querySelector('.testeee');
var wrapper = document.querySelector('.paizao');

// console.log(hippoMouse);
hippoMouse.addEventListener(
  'mouseover',
  function () {
    hippoMouse.classList.add('animate__bounce');
  },
  false
);
hippoMouse.addEventListener(
  'mouseout',
  function () {
    hippoMouse.classList.remove('animate__bounce');
  },
  false
);
