<?php 



$data = json_decode( file_get_contents('php://input') );
$data->Name->Ranking = rand(0,10);
$data->ContactInfo->Ranking = rand(0,10);
$data->Address->Ranking = rand(0,10);
$data->PositionApplyingFor->Ranking = rand(0,10);
$data->Objective->Ranking = rand(0,10);
$data->Websites->Ranking = rand(0,10);

$data->Achievements = rankingInArray($data->Achievements);

var_dump($data->Achievements);

//$data->Achievements = rankingInArray($data->Achievements);


// var_dump($data);

function rankingInArray($obj){
    $max = sizeof($obj);
    for($i = 0; $i < $max; $i++){
        $obj[$i]->Ranking = rand(0,10);
    }
}

?>