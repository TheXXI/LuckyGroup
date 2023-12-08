document.getElementById('burger-menu').addEventListener('click', () => {
    document.getElementById('burger-menu').classList.toggle('active');
    document.getElementsByClassName('moblie')[0].classList.toggle('active');
})