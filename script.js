document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const galleryLink = document.getElementById('gallery-link');
    const achievementsLink = document.getElementById('achievements-link');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    galleryLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.gallery h2').innerText = 'Фото галерея';
        document.querySelector('.gallery .image-container').innerHTML = '<p>Тут буде текст замість малюнків</p>';
    });

    achievementsLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.achievements h2').innerText = 'Наші досягнення';
        document.querySelector('.achievements ul').innerHTML = '<li>Досягнення 1</li><li>Досягнення 2</li>';
    });
});
