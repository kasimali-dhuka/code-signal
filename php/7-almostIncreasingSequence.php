function almostIncreasingSequence($sequence) {
    $counter = 0;
    
    for($i = 1; $i < count($sequence); $i++){
        if($sequence[$i] <= $sequence[$i - 1]){
            $counter++;
            
            if($counter > 1){
                return false;
            }
            if(($sequence[$i] <= $sequence[$i - 2]) /*&& ($sequence[$i + 1] <= $sequence[$i - 1])*/){
                if($i == count($sequence)-1){
                    return true;
                } elseif ($sequence[$i + 1] <= $sequence[$i - 1]){
                    return false;
                }
            }
        }
    }
    
    return true;
}
