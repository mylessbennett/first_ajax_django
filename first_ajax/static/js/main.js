// on click make get request to api root
document.addEventListener("DOMContentLoaded", function() {
    firstButton = document.getElementById('first-button');
    firstButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    });

    // on click make get request to ping and display response data
    secondButton = document.getElementById('second-button');
    secondButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/ping/')
        .then(function(response){
            console.log(response.data);
            const sectionOne = document.createElement('section');
            sectionOne.innerHTML = response.data;
            document.body.appendChild(sectionOne);
            console.log('That went well!');
        })
        .catch(function(error) {
            errorSection = document.createElement('section');
            errorSection.innerHTML = error.response.data
            document.body.appendChild(errorSection);
            console.log('That did not go well...');
        })
        .then(function() {
            console.log('Hey, the request finished!');
        })
    })
});