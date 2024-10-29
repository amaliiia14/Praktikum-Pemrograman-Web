<?php
$star = 5; 

for ($i = 1; $i <= $star; $i++) {
    for ($j = $star; $j > $i; $j--) {
        echo "&nbsp;&nbsp;"; 
    }
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>"; 
}
?>
