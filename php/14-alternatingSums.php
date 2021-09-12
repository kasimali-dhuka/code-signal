function alternatingSums($a) {

$team_a = [];
$team_b = [];

foreach($a as $x => $player){
    if($x % 2 == 0){
        array_push($team_a, $player);
    } else {
        array_push($team_b, $player);
    }
}

return [array_sum($team_a), array_sum($team_b)];
}
