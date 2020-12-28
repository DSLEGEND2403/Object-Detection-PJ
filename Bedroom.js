img="";
status="";
objects=[];

function preload()
{
img= loadImage('Bedroom.jpg');
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();   
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object"; 
}

function modelLoaded()
{
console.log("Model Loaded!");
status = "true";
objectDetector.detect(img, gotResult);    
}

function gotResult(error, results)
{
if(error)
{
console.log(error);    
}    
console.log(results);
objects=results;
}