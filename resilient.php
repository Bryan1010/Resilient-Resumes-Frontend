<?php
    $data = json_decode( file_get_contents('php://input'),true );
?>
<div class="feedback">
    <h1 class="text-center">Feedback</h1>

    <div class="legend">
        <p class="legend-title text-center">Legend</p>
        <ul>
            <li> 
                <span class="score-1"></span>Needs Improvement
            </li>
            <li> 
                <span class="score-2"></span> Average
            </li>
            <li>
                <span class="score-3"></span>Above Average </li>
            <li> 
                <span class="score-4"></span>Excellent
            </li>
        </ul>
  </div>


    <h2>Name</h2>
    <div class="feedback-section">
        <p><?php echo $data[Name][FName] . ' ' . $data[Name][LName] ?></p>
    </div>

    <h2>Contact Information</h2>
    <div class="feedback-section" data-value="5" title="Excellent">
        <p>Phone Number: <?php echo $data[ContactInfo][Phone] ?></p>
        <p>Email: <?php echo $data[ContactInfo][Email] ?></p>
    </div>

    <h2>Address</h2>
    <div class="feedback-section" data-value="5" title="Excellent">
        <p>Address Line 1: <?php echo $data[Address][AddressLine1]?></p>
        <?php if(strlen($data[Address][AddressLine2]) > 0) {?>
            <p>Address Line 2: <?php echo $data[Address][AddressLine2]?></p>
        <?php } ?>
        <p>City: <?php echo $data[Address][City] ?></p>
        <p>State: <?php echo $data[Address][State] ?></p>
        <p>Zipcode: <?php echo $data[Address][Zip] ?></p>
        <p>Country: <?php echo $data[Address][Country] ?></p>
    </div>

    <h2>Position Applying For</h2>
    <div class="feedback-section" data-value="5" title="Excellent">
        <p><?php echo $data[PositionApplyingFor][PositionName] ?></p>
    </div>

    <h2>Objective Statement</h2>
    <div class="feedback-section" data-value="1" title="Needs Improvement. Try coming up with an Objective statement. They are usually tailored to the job you are trying to get and are usually 1 to 2 sentences long">
        <?php if(strlen($data[Objective][Statement]) == 0) {
            echo "<p>No Objective Statement listed</p>";
        } else {?>
        <p><?php echo $data[Objective][Statement] ?></p>
        <?php } ?>
    </div>

    <h2>Websites</h2>
    <div class="feedback-section" data-value="3" title="Average. Usually Developers would have a github account with projects they work on on their free time, try creating a personal website on github.">
        <p>LinkedIn: 
            <a href="<?php echo $data[Websites][LinkedIn] ?>">
                <?php echo $data[Websites][LinkedIn] ?>
            </a>
        </p>
        <p>Github : None</p>
        <p>Personal Website: None</p>
    </div>

    <h2>Schools Attended</h2>
    <div class="feedback-section" data-value="5" title="Excellent">
        <?php $ctr = 1; foreach($data[School] as $school ) {
            echo "<p>School #$ctr </p>";
            echo "<p>Name: $school[Name]</p>";
            echo "<p>$school[City], $school[State], $school[Country]</p>";
            echo "<p>Major: $school[Major]</p>";
            echo "<p>GPA: $school[Gpa]</p>";
            echo "<p>Expected Graduation: $school[Graduation]</p>";
            $ctr++;
        } ?>
    </div>

    <h2>Relevant Courses</h2>
    <div class="feedback-section" data-value="1" title="Needs Improvement. It is useful to have courses listed that are related with the position you plan on applying.">
        <p>No Course Listed</p>
    </div>

    <h2>Experience</h2>
    <div class="feedback-section" data-value="3" title="Average. While it's good that you have some professional experience, employers like to see organizations that you were part of, leadership positions that you have held, etc">
        <?php foreach($data[Experience] as $exp) {
            echo "<p>Experience Type: $exp[Type]</p>";
            echo "<p>Organization Name: $exp[Name]</p>";
            echo "<p>Role: $exp[Position]</p>";
            echo "<p>$exp[City], $exp[State], $exp[Country]</p>";
            echo "<p>Project: $exp[Project]</p>";
            echo "<p>Description: $exp[ProjectDescription]</p>";
            echo "<p>Start Date: $exp[StartDate]</p>";
            echo "<p>End Date: $exp[EndDate]</p>";

        } ?>
    </div>

    <h2>Skills</h2>
    <div class="feedback-section" data-value="5" title="Excellent">
        <?php 
            echo "<h3>Languages</h3>";
            foreach($data[Skill][Languages] as $lan => $val){
                foreach($val as $k=> $v){
                    echo "<p>$k: $v</p>";
                }
            } 

            echo "<br/><h3>Frameworks</h3>";
            foreach($data[Skill][Frameworks] as $lan => $val){
                foreach($val as $k=> $v){
                    echo "<p>$k: $v</p>";
                }
            } 

            echo "<br/><h3>Operating Systems</h3>";
            foreach($data[Skill][OS] as $lan => $val){
                foreach($val as $k=> $v){
                    echo "<p>$k: $v</p>";
                }
            } 

        
        ?>
    </div>

    <h2>Achievements</h2>
    <div class="feedback-section" data-value="1" title="Needs Improvement. It's good to show your future employer any merit that you have earned, think if you were on a Dean's List, any scholarships you have earned, etc.">
        <p>No Achievements listed</p>
    </div>

    <h2>Activities</h2>
    <div class="feedback-section" data-value="1" title="Needs Improvement. Try thinking of any extracurricular activities you do. Sports, groups you're part of, etc">
        <p>No Activities listed</p>
    </div>

    
</div>



    