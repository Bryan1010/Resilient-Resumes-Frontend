<?php
    $data = json_decode( file_get_contents('php://input') );
?>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Resilient Resumes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="./css/bootstrap.css" />
    <link rel="stylesheet" href="./css/forms.css">


</head>

<body>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="feedback">
                <h1 class="text-center">Feedback</h1>

                <?php 

                    foreach ($data as $key => $value) {?>
                        <h2><?php echo $key ?></h2>
                        
                        <div class="feedback-section" data-value="<?php echo rand(0,10) ?>">
                        <?php foreach($value as $sub => $val) {?>
                            <p><?php echo $val ?></p>

                        <?php } ?>
                        </div>
                    <?php
                    }

                ?>

                
            </div>


        </div>
    </div>

    <script src="./js/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="./js/bootstrap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="./js/forms.js"></script>
    <script src="./js/jquery-serializer.js"></script>
    <script src="./js/app.js"></script>
</body>

</html>