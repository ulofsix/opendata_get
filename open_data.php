<?php
    $url ="https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";
    $mydata = file_get_contents($url);
    echo($mydata);
?>