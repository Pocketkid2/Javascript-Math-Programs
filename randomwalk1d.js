// First draw the origin line
stroke(0, 0, 255);
line(0, 200, 400, 200);

// Set variables for random walk
stroke(0, 0, 0);
strokeWeight(2);
var x = 0;
var y = 200;

// Repeat till end of canvas
while (x < 400) {
    
    // Draw the current point
    point(x, y);
    
    // Flip a coin
    var heads = round(random(0, 1));
    
    // If it's heads, go down
    if (heads) {
        y += 2;
    } else {
        y -= 2; // Tails, go up
    }
    
    // Move forward
    x++;
    
}
