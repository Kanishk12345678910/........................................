canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg"
rover_image = "rover.png"

rover_x = 30
rover_y = 10

function add() {
    background_imagetag = new Image() //defining a variable with a new image
    background_imagetag.onload = uploadbg //seting a function on loading this valiable
    background_imagetag.src = background_image //load image

    rover_imagetag = new Image()
    rover_imagetag.onload = uploadrover
    rover_imagetag.src = rover_image
}

function uploadbg() {
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height)

}

function uploadrover() {
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "38") {
        up()
    }
    if (keyPressed == "37") {
        left()
    }
    if (keyPressed == "39") {
        right()
    }
    if (keyPressed == "40") {
        down()
    }
}
function up() {
    if (rover_y >= 0){
        rover_y = rover_y - 10 // when we move up the y possition decreases by 10
        uploadbg()
        uploadrover()

    }
}
function down() {
    if (rover_y < 500){
        rover_y = rover_y + 10 // when we move down the y possition increases by 10
        uploadbg()
        uploadrover()

    }
}
function left() {
    if (rover_x >= 0){
        rover_x = rover_x - 10 // when we move left the x possition decreases by 10
        uploadbg()
        uploadrover()

    }
}
function right() {
    if (rover_x < 700){
        rover_x = rover_x + 10 // when we move right the x possition increases by 10
        uploadbg()
        uploadrover()

    }
}