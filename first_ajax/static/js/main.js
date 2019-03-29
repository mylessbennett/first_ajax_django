// on click make get request to api root
document.addEventListener("DOMContentLoaded", function() {
    firstButton = document.getElementById('first-button');
    firstButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    });

    // on click make get request to ping and display response data or errors
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
    });

    // on click make get request to ping and display response data 
    thirdButton = document.getElementById('third-button');
    thirdButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/count/')
        .then(function(response) {
            const sectionTwo = document.createElement('section');
            sectionTwo.innerHTML = response.data;
            document.body.appendChild(sectionTwo);
        })
    });

    // on click make get request to time
    fourthButton = document.getElementById('fourth-button');
    fourthButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/time/', {
            params: {timezone: "Europe/Sofia"}
        })
        .then(function(response) {
            const sectionThree = document.createElement('section');
            sectionThree.innerHTML = response.data;
            document.body.appendChild(sectionThree);
        })
    })

    fifthButton = document.getElementById('fifth-button');
    fifthButton.addEventListener('click', function() {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/a_car/')
        .then(function(response) {
            const carItem = document.createElement('li');
            carItem.innerHTML = response.data;
            console.log('A car!');
            document.getElementById('car-list').appendChild(carItem);
        })
    })
});