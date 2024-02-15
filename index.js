// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
 
// Speed up the mouse.
robot.setMouseDelay(2);

let i = false;

setInterval(()=>{
    var mouse = robot.getMousePos()
    robot.moveMouse(mouse.x + 1, mouse.y + 1);
    robot.moveMouse(mouse.x - 1, mouse.y - 1);
    i = !i;
    
}, 1000)