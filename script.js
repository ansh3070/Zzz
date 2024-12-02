document.querySelector('.open-popup').addEventListener('click', () => {
  document.getElementById('popup').classList.add('active');
});

function closePopup() {
  document.getElementById('popup').classList.remove('active');
}
