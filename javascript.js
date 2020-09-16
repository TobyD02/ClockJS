canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 600;

var x = 0;

var radius = 200;

function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    var now = new Date();

    var hour =  now.getHours().toString();
    var min =  now.getMinutes().toString();
    var sec =  now.getSeconds().toString();

    if (hour >= 12){
        hour -= 12;
    }

    ctx.font = "20px Arial";

    for (i = 0; i < 12; i++){
        x = i * Math.PI / 6;
        var num = i;
        if (i == 0){
            num = 12;
        }
        ctx.fillText(num, Math.sin(x) * (radius + 15) + (canvas.width / 2 - 10), Math.cos(x - Math.PI) * (radius + 20) + (canvas.height / 2 + 10));
    }

    ctx.font = "30px Arial";

    for (i = 0; i < 60; i++){
        x = i * Math.PI / 30;
        var num = i;
        if (i == 0){
            num = 12;
        }
        if (i % 5 != 0){
        ctx.fillText(".", Math.sin(x) * (radius + 5) + (canvas.width / 2 - 4), Math.cos(x - Math.PI) * (radius + 5) + (canvas.height / 2 + 2));
        }
    }




    minAng = (min * Math.PI / 30) + (sec * Math.PI / 30 / 60);
    hourAng = (hour * Math.PI / 6);
    

    //console.log(hourAng);

    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, radius - radius / 3, hourAng - (Math.PI / 2), hourAng - (Math.PI / 2));
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, radius - 10, minAng - (Math.PI / 2), minAng - (Math.PI / 2));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();



}

setInterval(draw, 10);