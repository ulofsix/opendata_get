// 副程式
function get_ajax() {
    $.ajax({
        type: "GET",
        // url: "http://localhost/UL6HOME/open_data.php",
        // url: "http://192.168.20.4/UL6HOME/open_data.php",
        // url: "https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx",
        url: "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",
        dataType: "json",
        success: mydata,
        error: function () {
            alert("error");
        }
    });
};