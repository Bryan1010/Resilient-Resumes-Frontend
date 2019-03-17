let url = "http://localhost:3000/getResumeScore";


document.querySelector("#msform").addEventListener("submit", function (e) {
    e.preventDefault();    //stop form from submitting

    let data = JSON.stringify($('form').serializeObject());

    console.log(data);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/getResumeScore",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Postman-Token": "51243b11-97b2-4c2a-a8b1-d649dff221a4"
        },
        "processData": false,
        "data": data
    }

    $.ajax(settings).done(function (response) {
        localStorage.setItem('Resume', JSON.stringify(response));
        console.log(response);
    });
});