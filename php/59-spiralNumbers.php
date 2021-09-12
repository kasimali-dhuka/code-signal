function spiralNumbers($n) {
    $dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    $curDir = 0;
    $curPos = [0,0];
    $res = array_fill(0,$n,array_fill(0,$n,0));
    for ($i=1; $i<$n*$n+1; $i++) {
        $res[$curPos[0]][$curPos[1]] = $i;
        $nextPos = [$curPos[0]+$dirs[$curDir][0],$curPos[1]+$dirs[$curDir][1]];
        if (!(0<=$nextPos[0]&&$nextPos[0]<$n&&0<=$nextPos[1]&&$nextPos[1]<$n&&$res[$nextPos[0]][$nextPos[1]]==0)) {
            $curDir = ($curDir+1)%4;
            $nextPos = [$curPos[0]+$dirs[$curDir][0],$curPos[1]+$dirs[$curDir][1]];}
        $curPos = $nextPos;}
    return $res;
}