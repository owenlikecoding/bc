
var mode = window.localStorage.getItem('mode');
if (window.localStorage.getItem("mode") == "china") {
    window.setTimeout(function () {

        var sound1 = new Audio("../assets/xue-hua-piao-piao-bei-feng-xiao-xiao.mp3");
        sound1.play();
        sound1.loop = true;
    }, 1000);
}
if (mode == "usa") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "url('../assets/usa.png')";
    var sound2 = new Audio("../assets/US.mp3");
    sound2.play();
    sound2.loop = true;
}
if (mode == "japan") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

}
if (mode == "russia") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}
if (mode == "germany") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
if (mode == "france") {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}
if (mode == "italy") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "spain") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}
if (mode == "uk") {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}
if (mode == "india") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "australia") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}
if (mode == "canada") {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}
if (mode == "brazil") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "south africa") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "mexico") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "nigeria") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "argentina") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "saudi arabia") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "indonesia") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "colombia") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "poland") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
if (mode == "south korea") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}
else {
    var bgColor = window.localStorage.getItem('bgColor');
    var textColor = window.localStorage.getItem('textColor');
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}