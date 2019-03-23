//Variable keeps track of current array index
let arrayIdx = {
    course: 0,
    Achievements: 0,
    Activities: 0,
    Experience: 0
}

let url = "http://localhost:3000/getResumeScore";

document.querySelector("#msform").addEventListener("submit", function (e) {
    e.preventDefault();    //stop form from submitting

    let data = JSON.stringify($('form').serializeObject());

    // console.log(data);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/resume/resilient.php",
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
        // localStorage.setItem('Resume', JSON.stringify(response));
        console.log(response);
        $('#content').html(response);
        // alert('done');
    });
});

function addNewCourse() {
    console.log("WHY");
    arrayIdx.course += 1;
    let c = arrayIdx.course;
    let template = `
        <h3 class="fs-title">Course ${c + 1}:</h3>
        <input type="text" name="RelevantCourse[${c}][Name]" placeholder="Course Name" />
        <textarea type="text" name="RelevantCourse[${c}][Description]" placeholder="Course Description" cols="40"
        rows="3"></textarea> 
    `;

    let container = document.getElementById('course-container');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);
}