function avoidObstacles($inputArray) {
  $jump = 0;
  sort($inputArray);

  for ($i = 2; $i < $inputArray[count($inputArray) - 1] ** 2; $i++) {
    $counter = 0;
    for ($j = 0; $j < count($inputArray); $j++) {
      if ($inputArray[$j] % $i !== 0) {
        $counter++;
      }
    }

    if ($counter === count($inputArray)) {
      $jump = $i;
      break;
    }
  }

  return $jump;
}
