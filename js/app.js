//Variable keeps track of current array index
let arrayIdx = {
    course: 0,
    Achievements: 0,
    Activities: 0,
    Experience: 0,
    Education: 0,
}

$(document).ready(function () {
    $('.skill-container input[type="checkbox"]').click(function () {
        if ($(this).is(':checked'))
            $(this).siblings().css("display", "block");
        else
            $(this).siblings().css("display", "none");
    });
});



let url = "/resume/resilient.php";

document.querySelector("#msform").addEventListener("submit", function (e) {
    e.preventDefault();    //stop form from submitting

    let data = JSON.stringify($('form').serializeJSON());
    // console.log(data);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
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

        $('.feedback-section').tooltip()
        // alert('done');
    });
});

function addNewCourse() {
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

function addNewEd() {
    arrayIdx.Education += 1;
    let c = arrayIdx.Education;

    let template = `
                           <h3 class="fs-title">Education ${c + 1}:</h3>
                               
                               <input type="text" name="School[${c}][Name]" placeholder="Institution Name" />
                            
                               <input type="text" name="School[${c}][City]" placeholder="City" />
                               <input type="text" name="School[${c}][State]" placeholder="State" />
                               <input type="text" name="School[${c}][Country]" placeholder="Country" />

                               <div class="form-group">
                               <h3 class="fs-subtitle">Select your degree</h3>
                               <select class="form-control" id="degree">
                               <option></option>
                               <option name="School[${c}][Diploma]">Diploma</option>
                               <option name="School[${c}][Associates]">Associates</option>
                               <option name="School[${c}][Bachelors]">Bachelors</option>
                               <option name="School[${c}][Certificate]">Certificate</option>
                               </select>
                               </div>

                               <input type="text" name="School[${c}][Major]" placeholder="Major" />
                               <input type="text" name="School[${c}][Minor]" placeholder="Minor" />
                               <input type="number" name="School[${c}][Gpa]" placeholder="GPA" />
                               <h3 class="fs-subtitle">Graduation or Expected Date:</h3>
                               <input type="month" name="School[${c}][Graduation]" placeholder="Graduation or expected date" />

                               `;

    let container = document.getElementById('education-container');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);


}

function addNewExperience() {
    arrayIdx.Experience += 1;
    let c = arrayIdx.Experience;

    let template = `
                   <h3 class="fs-title">Experience ${c + 1}:</h3>
                <div class="form-group">
                        <h3 class="fs-subtitle">Type of Experience</h3>
                            <select class="form-control">
                              <option></option>
                              <option name="Experience[${c}][Academic]">Academic</option>
                              <option name="Experience[${c}][Work]">Professional</option>
                              <option name="Experience[${c}][Work]">Other Work</option>
                              <option name="Experience[${c}][Personal]">Personal</option>
                              <option name="Experience[${c}][Other]">Other</option>
                            </select>
                        </div>
                <input type="text" name="Experience[${c}][Name]" placeholder="Experience Organization Name" />
                <input type="text" name="Experience[${c}][Position]" placeholder="Experience Position Name" />
                Location:
                <input type="text" name="Experience[${c}][City]" placeholder="City" />
                <input type="text" name="Experience[${c}][State]" placeholder="State" />
                <input type="text" name="Experience[${c}][Country]" placeholder="Country" />
                <textarea type="text" name="Experience[${c}][Description]" placeholder="Experience Description" cols="40"
                 rows="5"></textarea>
                 <input type="text" name="Experience[${c}][Project]" placeholder="Project Title" />
                 <textarea type="text" name="Experience[${c}][ProjectDescription]" placeholder="Project Description" cols="40"
                 rows="3"></textarea>
                <input type="text" name="Experience[${c}][ProjectOutcome]" placeholder="Project Outcome" />
                
                <h3 class="fs-subtitle">Start Date:</h3>
                <input type="month"  name="Experience[${c}][StartDate]" placeholder="Start Date" />
                <h3 class="fs-subtitle">End Date or select present:</h3>
                <input type="month"  name="Experience[${c}][EndDate]" placeholder="End Date" />
                <select class="form-control" id="type">
                    <option name="Experience[${c}][PresentDate]">Present</option>
                </select>
                <br>
                       

                           `;

    let container = document.getElementById('experience-container');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);
}

function addNewAchievement() {
    arrayIdx.Achievements += 1;
    let c = arrayIdx.Achievements;

    let template = `
        <h3 class="fs-title">Achievement ${c + 1}:</h3>
        <input type="text" name="Achievements[${c}][Name]" placeholder="Achievement/Honor Name" />
        <textarea type="text" name="Achievements[${c}][Description]" placeholder="Description" cols="40"
        rows="3"></textarea>`;

    let container = document.getElementById('achievement-container');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);
}

function addNewActivity() {
    arrayIdx.Activities += 1;
    let c = arrayIdx.Activities;

    let template = `
        <h3 class="fs-title">Activity ${c + 1}:</h3>
        <input type="text" name="Activities[${c}][Name]" placeholder="Course Name" />
        <textarea type="text" name="Activities[${c}][Description]" placeholder="Course Description"
            cols="40" rows="3"></textarea>
    `;

    let container = document.getElementById('activities-container');
    let div = document.createElement('div');
    div.innerHTML = template;
    container.appendChild(div);
}

function sampleSumbmition() {
    let data = JSON.stringify(sampleData);
    // console.log(data);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
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

        $('.feedback-section').tooltip()
        // alert('done');
    });
}

var sampleData = {
    "Name": {
        "FName": "Bryan",
        "LName": "Cruz",
        "Suffix": ""
    },
    "ContactInfo": {
        "Phone": "123-456-9988",
        "Email": "Student@resilientresumes.com"
    },
    "Address": {
        "AddressLine1": "123 Main St",
        "AddressLine2": "",
        "City": "Reading",
        "State": "PA",
        "Zip": "19605",
        "Country": "United States"
    },
    "PositionApplyingFor": {
        "PositionName": "Junior Developer"
    },
    "Objective": {
        "Statement": ""
    },
    "Websites": {
        "LinkedIn": "https://www.linkedin.com/in/bryan-cruz/",
        "GitHub": "",
        "PersonalWebsite": ""
    },
    "School": [
        {
            "Name": "UPR",
            "City": "Bayamon",
            "State": "PR",
            "Country": "United States",
            "Major": "Computer Science",
            "Minor": "",
            "Gpa": "3.8",
            "Graduation": "2016-03"
        },
        {
            "Name": "Reading Area Community College",
            "City": "Reading",
            "State": "PA",
            "Country": "United States",
            "Major": "Web Development",
            "Minor": "",
            "Gpa": "3.5",
            "Graduation": "2018-05"
        }
    ],
    "RelevantCourse": [
        {
            "Name": "",
            "Description": ""
        }
    ],
    "Experience": [
        {
            "Type": "Professional",
            "Name": "Yiftee",
            "Position": "Web Development Intern",
            "City": "Menlo Park",
            "State": "CA",
            "Country": "United States",
            "Description": "",
            "Project": "Responsive Website",
            "ProjectDescription": "",
            "ProjectOutcome": "",
            "StartDate": "2014-06",
            "EndDate": "2014-07"
        }
    ],
    "Skill": {
        "Languages": {
            "0": {
                "C-Sharp": "Intermediate"
            },
            "2": {
                "Javascript": "Intermediate"
            }
        },
        "Frameworks": {
            "0": {
                "dotNet": "Intermediate"
            }
        },
        "OS": {
            "0": {
                "Windows": "Advanced"
            },
            "1": {
                "Mac": "Advanced"
            },
            "2": {
                "Linux": "Intermediate"
            }
        }
    },
    "Achievements": [
        {
            "Name": "",
            "Description": ""
        }
    ],
    "Activities": [
        {
            "Name": "",
            "Description": ""
        }
    ]
}

function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }