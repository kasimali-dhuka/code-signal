function bishopAndPawn($bishop, $pawn) {
    $pawn = strtolower($pawn);
    $bishop = strtolower($bishop);

    $on_top_right = function($pawn, $bishop){
        $new_bishop = $bishop;
        for($i = ord($bishop[0])+1; $i <= ord("h"); $i++){
            $new_bishop = chr($i) . ($new_bishop[1]+1);
            
            if($new_bishop == $pawn){
                return true;
            }
        }
        return false;
    };

    $on_top_left = function($pawn, $bishop){
        $new_bishop = $bishop;
        for($i = ord($bishop[0])-1; $i >= ord("a"); $i--){
            $new_bishop = chr($i) . ($new_bishop[1]+1);
            
            if($new_bishop == $pawn){
                return true;
            }
        }
        return false;
    };

    $on_bottom_right = function($pawn, $bishop){
        $new_bishop = $bishop;
        for($i = ord($bishop[0])+1; $i <= ord("h"); $i++){
            $new_bishop = chr($i) . ($new_bishop[1]-1);
            echo $new_bishop . "<br>";
            
            if($new_bishop == $pawn){
                return true;
            }
        }
        return false;
    };

    $on_bottom_left = function($pawn, $bishop){
        $new_bishop = $bishop;
        for($i = ord($bishop)-1; $i >= ord("a"); $i--){
            $new_bishop = chr($i) . ($new_bishop[1]-1);
            echo $new_bishop . "<br>";
            
            if($new_bishop == $pawn){
                return true;
            }
        }
        return false;
    };
    
    if((ord($pawn[0]) > ord($bishop[0])) && ($pawn[1]) > ($bishop[1])){
        return $on_top_right($pawn, $bishop);
    } elseif ((ord($pawn[0]) < ord($bishop[0])) && ($pawn[1]) > ($bishop[1])) {
        return $on_top_left($pawn, $bishop);
    } elseif ((ord($pawn[0]) > ord($bishop[0])) && ($pawn[1]) < ($bishop[1])) {
        return $on_bottom_right($pawn, $bishop);
    } elseif((ord($pawn[0]) < ord($bishop[0])) && ($pawn[1]) < ($bishop[1])){
        return $on_bottom_left($pawn, $bishop);
    }
    
    return false;
    
}
