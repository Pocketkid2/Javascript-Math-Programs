// Draw origin lines
stroke(0, 0, 255);
line(0, 200, 400, 200);
line(200, 0, 200, 400);

// Setup variables for random walk
stroke(0, 0, 0);
strokeWeight(2);
var x = 200;
var y = 200;

// Function for testing if point still on canvas
var onCanvas = function() {
    if (x > 400 || x < 0 || y > 400 || y < 0) {
        return false;
    } else {
        return true;
    }
};

while (onCanvas()) {
    
    // Draw point
    point(x, y);
    
    // Roll a 4-sided dice
    var roll = round(random(0, 3));

    // Move N/S/E/W depending on roll
    switch (roll) {
        case 0:
            x += 2;
            break;
        case 1:
            y += 2;
            break;
        case 2:
            x -= 2;
            break;
        case 3:
            y -= 2;
            break;
    }
    
}
