function arrayMaximalAdjacentDifference($inputArray) {
  $maxDiff = 0;
  $currDiff = 0;

  for ($i = 1; $i < count($inputArray); $i++) {
    $currDiff = abs($inputArray[$i] - $inputArray[$i - 1]);
    if ($currDiff >= $maxDiff) {
      $maxDiff = $currDiff;
    }
  }

  return $maxDiff;
}
