let currentIndex = 0; // Índice da imagem atual

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel-container .slide');
    const totalSlides = slides.length;

    
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

   
    const newTransformValue = -(currentIndex * 100); 
    document.querySelector('.carrossel-container').style.transform = `translateX(${newTransformValue}%)`;
}
