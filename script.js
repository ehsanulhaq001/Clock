let date, hours, minutes, seconds;
window.onload = function() {
    setup();
    setInterval(draw, 1000 / 2);
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = 800;
    cnv.height = 800;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
}

function draw() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    secAng = seconds * 6 * Math.PI / 180;
    minAng = minutes * 6 * Math.PI / 180;
    houAng = hours * 6 * Math.PI / 180;

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.arc(cnv.width / 2, cnv.height / 2, 200, (-Math.PI / 2), houAng - (Math.PI / 2), false);
    ctx.strokeStyle = "rgb(150, 255, 100)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(cnv.width / 2, cnv.height / 2);
    ctx.lineTo(cnv.width / 2 + 160 * Math.sin(houAng), cnv.height / 2 - 160 * Math.cos(houAng));
    ctx.strokeStyle = "rgb(150, 255, 100)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(cnv.width / 2 + 160 * Math.sin(houAng), cnv.height / 2 - 160 * Math.cos(houAng), 10, 0, 2 * Math.PI, true);
    ctx.arc(cnv.width / 2 + 200 * Math.sin(houAng), cnv.height / 2 - 200 * Math.cos(houAng), 12, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(150, 255, 100)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cnv.width / 2, cnv.height / 2, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(150, 255, 100)";
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(cnv.width / 2, cnv.height / 2, 200, (-Math.PI / 2), minAng - (Math.PI / 2), false);
    ctx.strokeStyle = "rgb(150, 100 ,255)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(cnv.width / 2, cnv.height / 2);
    ctx.lineTo(cnv.width / 2 + 180 * Math.sin(minAng), cnv.height / 2 - 180 * Math.cos(minAng));
    ctx.strokeStyle = "rgb(150, 100 ,255)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(cnv.width / 2 + 180 * Math.sin(minAng), cnv.height / 2 - 180 * Math.cos(minAng), 5, 0, 2 * Math.PI, true);
    ctx.arc(cnv.width / 2 + 200 * Math.sin(minAng), cnv.height / 2 - 200 * Math.cos(minAng), 5, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(150, 100 ,255)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cnv.width / 2, cnv.height / 2, 5, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(150, 100 ,255)";
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.arc(cnv.width / 2, cnv.height / 2, 220, (-Math.PI / 2), secAng - (Math.PI / 2), false);
    ctx.strokeStyle = "rgb(255, 100 ,150)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.moveTo(cnv.width / 2, cnv.height / 2);
    ctx.lineTo(cnv.width / 2 + 220 * Math.sin(secAng), cnv.height / 2 - 220 * Math.cos(secAng));
    ctx.strokeStyle = "rgb(255, 100 ,150)";
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(cnv.width / 2 + 220 * Math.sin(secAng), cnv.height / 2 - 220 * Math.cos(secAng), 3, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(255, 100 ,150)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cnv.width / 2, cnv.height / 2, 3, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(255, 100 ,150)";
    ctx.fill();

    ctx.beginPath();
    ctx.font = "50px Chalkboard";
    ctx.fillStyle = "lime";
    ctx.textAlign = "center";
    ctx.fillText(hours % 12 + ':' +
        ((minutes > 9) ? minutes : "0" + minutes) + ':' +
        ((seconds > 9) ? seconds : "0" + seconds) + ' ' +
        (hours > 12 ? "pm" : "am"),
        canvas.width / 2, canvas.height / 2 + 300);
}