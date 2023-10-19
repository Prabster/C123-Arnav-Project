function setup() {
    canvas = createCanvas(800, 500);
    canvas.position(750, 180);
    background("white");
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);
}