var distancia = 0;
var noseX = 0;
var noseY = 0;
var pulsoEsquerdo = 0;
var pulsoDireito = 0;
function preload(){
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background("rgb(251, 242, 244)");
    fill("yellow");
    stroke("chocolate");
    square(noseX, noseY, distancia);
    document.getElementById("oi").innerHTML = "Tamanho" + distancia.toFixed(3);
}
function modelLoaded(){
    console.log("poseNet iniciado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX + "," + noseY);
        pulsoDireito = results[0].pose.rightWrist.x;
        pulsoEsquerdo = results[0].pose.leftWrist.x;
        distancia = pulsoEsquerdo - pulsoDireito;
    }
}