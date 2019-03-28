// on click make get request to api root
document.addEventListener("DOMContentLoaded", function() {
    firstButton = document.getElementById('first-button');
    firstButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    });

    // on click make get request to ping and display response data
    secondButton = document.getElementById('second-button');
    secondButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/pong/')
        .then(function(response){
            console.log(response.data);
            const dataSection = document.createElement('section');
            dataSection.innerHTML = response.data;
            document.body.appendChild(dataSection);
        })
        .catch(function(error) {
            sectionFour = document.createElement('section');
            sectionFour.innerHTML = error.response.data
            document.body.appendChild(sectionFour);
        })
    })
});