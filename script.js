let slideNumber = document.getElementsByClassName('number')[0];
let slide = document.getElementsByClassName('slide')[0];
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let number = 1;
let maxImages = 4;
slideNumber.innerHTML = `${number} / ${maxImages}`;
leftArrow.addEventListener('click', () => {
  number++;
  if (number > maxImages) {
    number = 1;
  }
  slideNumber.innerHTML = `${number} / ${maxImages}`;
  slide.style.backgroundImage = 'url(' + number + '.jpg' + ')';
});
rightArrow.addEventListener('click', () => {
  number -= 1;
  if (number > maxImages) {
    number = 1;
  } else if (number < 1) {
    number = maxImages;
  }
  slideNumber.innerHTML = `${number} / ${maxImages}`;
  slide.style.backgroundImage = 'url(' + number + '.jpg' + ')';
});
