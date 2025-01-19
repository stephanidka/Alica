const thumbnails = document.querySelectorAll('.preview');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currientYear = document.getElementById('currientYear')


    currientYear.textContent = "Halle, " + new Date().getFullYear() + " ♥";
    console.log("idite nahui")

// gallery
let currentIndex = 0;

// Открытие модального окна
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    openModal(thumbnail.dataset.full);
  });
});

function openModal(imageSrc) {
  modal.classList.remove('hidden');
  modalImage.src = imageSrc;

  document.addEventListener('keydown', handleKeyPress);
}


// Закрытие модального окна
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');

  document.removeEventListener('keydown', handleKeyPress);
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Переключение изображений

function showPrev() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  modalImage.src = thumbnails[currentIndex].dataset.full;
}

function showNext() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  modalImage.src = thumbnails[currentIndex].dataset.full;
}

prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

// Обработчик нажатий клавиш
function handleKeyPress(event) {
  if (event.key === 'ArrowLeft') {
    showPrev(); // Переключение на предыдущее изображение
  } else if (event.key === 'ArrowRight') {
    showNext(); // Переключение на следующее изображение
  } else if (event.key === 'Escape') {
    closeGallery(); // Закрытие галереи
  }
}


