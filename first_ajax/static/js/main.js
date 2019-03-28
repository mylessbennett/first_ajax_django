document.addEventListener("DOMContentLoaded", function() {
    firstButton = document.getElementById('first-button')
    firstButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    })
});