const card = document.getElementById('card');
const brillo = document.createElement('div')

card.appendChild(brillo)
card.addEventListener('mousemove', (event) => {
    const cardRect = card.getBoundingClientRect();
    const mouseX = event.clientX - cardRect.left;
    const mouseY = event.clientY - cardRect.top;

    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const rotateX = (mouseY - cardHeight / 2) / cardHeight * 100;  // Rotación en el eje X
    const rotateY = (mouseX - cardWidth / 2) / cardWidth * 100;    // Rotación en el eje Y
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

});
card.addEventListener('mouseover', () => {
    brillo.classList.add('brillo');
});
card.addEventListener('mouseout', () => {
    brillo.classList.remove('brillo');
});
card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 250ms ease';
});

