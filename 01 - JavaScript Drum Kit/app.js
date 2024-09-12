function playAudio(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

function highlightKey(keyCode) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) {
    return;
  }
  key.classList.add('playing');
}

function onKeyDown(event) {
  playAudio(event.keyCode);
  highlightKey(event.keyCode);
}

function onTransitionEnd() {
  this.classList.remove('playing');
}

window.addEventListener('keydown', onKeyDown);

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('transitionend', onTransitionEnd)
});
