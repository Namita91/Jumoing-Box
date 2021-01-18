var canvas, edges;
var music;
var surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(50, 550, 75, 25);
    surface1.shapeColor = "blue";

    surface2 = createSprite(250, 550, 75, 25);
    surface2.shapeColor = "orange";

    surface3 = createSprite(450, 550, 75, 25);
    surface3.shapeColor = "pink";

    surface4 = createSprite(650, 550, 75, 25);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750), 20, 15, 15);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = -4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);
    // box.bounceOff(surface1);
    // box.bounceOff(surface2);
    // box.bounceOff(surface3);
    // box.bounceOff(surface4);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue";
        music.play();
    }
    
    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY= 0;
    }
    
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "pink";
        music.stop();
    }
    
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green";
    }

    drawSprites();
}
