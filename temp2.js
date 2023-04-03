// Image animation
const image = document.querySelectorAll('.Image');
const steps = document.getElementById('Figure');
const instruction = document.querySelectorAll('.Instruction');
const instruction2 = document.querySelectorAll('.stp');
const countSteps = document.getElementById('Steps')
let currentIndex = 0;
let currentIndexs = 0;

image.forEach((images, index) => {
  if (index !== 0) {
    images.style.display = 'none';
  }
});
instruction.forEach((stps, index) => {
  if (index !== 0) {
    stps.style.display = 'none';
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex === 0) ? image.length - 1 : currentIndex - 1;
    updateImage();
  } else if (event.key === "ArrowRight") {
    currentIndex = (currentIndex === image.length - 1) ? 0 : currentIndex + 1;
    updateImage()
  } else if (event.key === "ArrowDown") {
    currentIndex = (currentIndex === instruction.length - 1) ? 0 : currentIndex + 1;
    updateInstruction()
  } else if (event.key === "ArrowUp") {
    currentIndex = (currentIndex === 0) ? instruction.length - 1 : currentIndex - 1;
    updateInstruction()
  }
});
function updateImage() {
  image.forEach((photos) => {
    photos.style.display = 'none';

  });
  image[currentIndex].style.display = 'block';
  steps.innerHTML = currentIndex + 1;
}
function updateInstruction() {
  instruction.forEach((Steps) => {
    Steps.style.display = 'none';
  });
  instruction[currentIndex].style.display = 'flex';
  countSteps.innerHTML = currentIndex + 1;
}



