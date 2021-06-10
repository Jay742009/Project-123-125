leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(600, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', getposes);
}

function modelloaded() {
    console.log('poseNet is intialized');
}

function getposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('gray');
    document.getElementById("font_size").innerHTML = "Font size will be = " + difference + "px";
    fill('green');
    text('Jay', 90, 300);
    textSize(difference);
}