function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(50, 430, 80, 80)
    rect(100, 430, 400, 20)
    circle(560, 430, 80, 80)
    rect(560, 200, 20, 160)
    circle(560, 50, 80, 80)
    rect(100, 60, 400, 20)
    circle(50, 60, 80, 80)
    rect(50, 200, 20, 160)
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
    save('mySelfie.png')
}
