var fixedrect, movingrect;

function setup() {
    createCanvas(1200,800);
    fixedrect = createSprite(400, 100, 50, 80);
    fixedrect.shapeColor = "green";
    fixedrect.debug = true;
    movingrect = createSprite(400, 800, 80, 30);
    movingrect.shapeColor = "green";
    movingrect.debug = true;

    movingrect.velocityY = -5
    fixedrect.veloctyY = +5
}

function draw() {
    background(0,0,0);
    

    if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
        && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2) {
            
        }
}