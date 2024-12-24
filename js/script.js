let currentIndex = 0;
const images = [
    'imagens/imagem1.jpg', // Caminho relativo para as imagens
    'imagens/imagem2.jpg',
    'imagens/imagem3.jpeg',
    'imagens/imagem4.jpg'
];

const imageDisplay = document.getElementById('imageDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    imageDisplay.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});