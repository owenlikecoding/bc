var bgColor = window.localStorage.getItem('bgColor');
var textColor = window.localStorage.getItem('textColor');
document.body.style.backgroundColor = bgColor;
document.body.style.color = textColor;
var mode = window.localStorage.getItem('mode');
if(window.localStorage.getItem("mode") == "china") {
    window.setTimeout(function() {

    var sound1 = new Audio("../assets/xue-hua-piao-piao-bei-feng-xiao-xiao.mp3");
    sound1.play();
    sound1.loop = true;
    }, 1000);
}
if(mode == "usa") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "url('../assets/usa.png')";
    var sound2 = new Audio("../assets/US.mp3");
    sound2.play();
    sound2.loop = true;
}
if(mode == "japan") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    
}
if(mode == "russia") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}

