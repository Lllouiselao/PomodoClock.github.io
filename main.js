var min = 50;
var sec = 00;

//template of the time 
function temp(){
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}


// start tikcing the time
function start(){

    min = 49;
    sec = 59;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    // 60000 -> 1min     1000-> 1s 
    // 因为这个setInterval 会等1分钟再excute 所以我们一开始把时间改成 49min
    var min_interval = setInterval(minTimer, 60000);
    var sec_interval = setInterval(secTimer, 1000);

    function minTimer(){
        min = min - 1;
        document.getElementById("min").innerHTML = min;
    }

    function secTimer(){
        sec = sec - 1;
        document.getElementById("sec").innerHTML = sec;

        if (sec <= 0){
            if (min <= 0){
                clearInterval(min_interval);
                clearInterval(sec_interval);
            }
            sec = 60
        }
    }
}
