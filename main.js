difference = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(900, 130)

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('posenet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftScore = results[0].pose.keypoints[9].score; console.log("Left Wrist Score =" + leftScore);

        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;

        leftWristY = results[0].pose.leftWrist.y;

        rightWristY = results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw() {
    background("blue");
    textSize(difference);
    fill("white");
    text("Sophia", 200, 200);
}