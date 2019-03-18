<?php
    $data = json_decode( file_get_contents('php://input'),true );
?>
<div class="feedback">
    <h1 class="text-center">Feedback</h1>

    <?php 

        foreach ($data as $key => $value) {?>
            <h2><?php echo $key ?></h2>
            
            <div class="feedback-section" data-value="<?php echo rand(0,10) ?>">
            <?php foreach($value as $sub => $val) {?>
                <p>
                <?php if(sizeof($val) > 0 && is_array($val)){
                    foreach($val as $arr => $subarr){
                        echo ($subarr);
                    }
                }
                else{?>

                    <?php echo( $val) ?> 

                <?php }?>
                </p>

            <?php } ?>
            </div>
        <?php
        }

    ?>

    
</div>



    