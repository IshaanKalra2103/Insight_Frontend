const hamburger = document.querySelector('.hamburger-menu');
const contentArea = document.querySelector('.main-container')

hamburger.addEventListener('click', () => {
    contentArea.classList.toggle('active');
    console.log('Yes');
})