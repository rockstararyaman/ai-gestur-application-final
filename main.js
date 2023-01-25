noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(700, 410);
    canvas.position(680, 170);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet Is Now Initialised!!');
}

function draw() {
    background("#3792cb")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY ); 
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX); 
  
console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#969A97');

     document.getElementById("square_side").innerHTML = "Width and Height of the square will be " + difference +"px";
      fill('#03C04A');
      stroke('#03C04A');
    square(noseX, noseY, difference);  
}