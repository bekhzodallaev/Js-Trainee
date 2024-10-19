const BUTTON = document.querySelector('.btn');

BUTTON.addEventListener('mouseover', handleHover);
BUTTON.addEventListener('click', moveButton);

function handleHover() {
  const randomChance = Math.random();
  if (randomChance < 0.5) {
    moveButtonWithDelay();
  }
}

function moveButtonWithDelay() {
  setTimeout(() => {
    moveButton();
  }, 500);
}

function moveButton() {
  const documentWidth = window.innerWidth;
  const documentHeight = window.innerHeight;

  const randomTop = Math.random() * documentHeight;
  const randomLeft = Math.random() * documentWidth;

  BUTTON.style.position = 'fixed';
  BUTTON.style.top = `${randomTop}px`;
  BUTTON.style.left = `${randomLeft}px`;
}
