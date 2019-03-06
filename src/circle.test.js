const drawCircle = require('./circle');

test('drawCircle with a radius of zero returns an empty list', () => {
    expect(drawCircle(0, 0, 0)).toEqual([]);
});

test('drawCircle with a radius of one returns the center point', () => {
    expect(drawCircle(2, 2, 1)).toEqual(["2,2"]);
});

test('A circle with a radius of 2 should contain the eight points around the initial point', () => {
    var points = drawCircle(3, 3, 2);
    var expectedPoints = ['2,2', '3,2', '4,2', '2,3', '4,3', '2,4', '3,4', '4,4'];
    expect(points).toEqual(expect.arrayContaining(expectedPoints));
});

test('A circle with a radius of 3 should contain the 12 points around the initial point', () => {
    var points = drawCircle(3, 3, 3);
    var expectedPoints = [ 
        '5,3', '3,5', '1,3', '3,1', 
        '5,4', '4,5', '1,4', '2,5', 
        '1,2', '2,1', '5,2', '4,1',
        '5,5', '1,5', '1,1', '5,1' 
    ];
    expect(points).toEqual(expect.arrayContaining(expectedPoints));
});

test('Validate the expected points for a circle of radius 7', () => {
    var points = drawCircle(0, 0, 7);
    var expectedPoints = [ 
        '6,0', '0,6', '-6,0', '0,-6', '6,1', '1,6',
        '-6,1', '-1,6', '-6,-1', '-1,-6', '6,-1', '1,-6',
        '6,2', '2,6', '-6,2', '-2,6', '-6,-2', '-2,-6',
        '6,-2', '2,-6', '6,3', '3,6', '-6,3', '-3,6', 
        '-6,-3', '-3,-6', '6,-3', '3,-6', '6,4', '4,6',
        '-6,4', '-4,6', '-6,-4', '-4,-6', '6,-4', '4,-6',
        '5,4', '4,5', '-5,4', '-4,5', '-5,-4', '-4,-5',
        '5,-4', '4,-5', '5,5', '-5,5', '-5,-5', '5,-5'
    ];
    expect(points).toEqual(expect.arrayContaining(expectedPoints));
});

test('Large circles draw quickly', () => {
    var start = new Date();
    drawCircle(300, 500, 8000);
    var duration = new Date() - start;
    console.log(duration);
    expect(duration).toBeLessThan(100);
});