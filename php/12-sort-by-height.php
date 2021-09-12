function sortByHeight($a) {

$treePosition = [];
for ( $i = 0; $i < count($a); $i++){
    if ($a[$i] === -1){
        array_push($treePosition, $i);
    }
}

sort($a);

$formattedArr = array_slice($a, count($treePosition));


echo "<pre>";
print_r($treePosition);
print_r($formattedArr);


for( $i = 0; $i < count($treePosition); $i++) {
    array_splice($formattedArr, $treePosition[$i], 0, -1);
}

return ($formattedArr);

}
