song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound("Alan-Walker-Faded.mp3");
    
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    video.position(480,180);
    video.size(580,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Posenet Model Initialized");
}
function play() {
    song.setVolume(1);
    song.rate(1);
    song.play();
}
function draw() {
    image(video,0,0,600,500)
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristY+"leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristY+"rightWristY = "+rightWristY);
    }
}