/**
 * Adapted from https://en.wikipedia.org/wiki/Midpoint_circle_algorithm 
 */
function drawCircle (x0, y0, radius) {
    const points = new Set();
    var x = radius - 1;
    var y = 0;
    var dx = 1;
    var dy = 1;
    var error = dx - (radius * 2);
    while (x >= y) {
        points.add(( x + x0) + "," + ( y + y0))
        points.add(( y + x0) + "," + ( x + y0))
        points.add((-x + x0) + "," + ( y + y0))
        points.add((-y + x0) + "," + ( x + y0))
        points.add((-x + x0) + "," + (-y + y0))
        points.add((-y + x0) + "," + (-x + y0))
        points.add(( x + x0) + "," + (-y + y0))
        points.add(( y + x0) + "," + (-x + y0))
        if (error <= 0) {
            y++;
            error += dy;
            dy += 2;
        } else {
            x--;
            dx += 2;
            error += dx - (radius*2);
        }
    }
    return Array.from(points);
}

module.exports = drawCircle;