function depositProfit($deposit, $rate, $threshold) {
    $years = 0;

    for ($i = 0; $i < 1000; $i++) {
    $deposit += $deposit * ($rate / 100);
    if ($deposit >= $threshold) {
        $years = $i + 1;
        break;
    }
    }
    return $years;
}
