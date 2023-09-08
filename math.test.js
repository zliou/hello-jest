//const add = require('./add');
//const subtract = require('./subtract');
const math = require('./math');

test('Basic integer addition', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('Integer addition with negatives', () => {
    expect(math.add(1, -2)).toBe(-1);
});

test('Negative integer addition', () => {
    expect(math.add(-1, -2)).toBe(-3);
});

test('Floating point addition', () => {
    expect(math.add(1.111, 2.222)).toBeCloseTo(3.333, 0.001);
});

test('Basic integer subtraction', () => {
    expect(math.subtract(3, -2)).toBe(5);
});

test('Negative integer subtraction', () => {
    expect(math.subtract(-3, -2)).toBe(-1);
});

test('Boolean: true', () => {
    expect(true).toBeTruthy();
});

test('Boolean: false', () => {
    expect(false).toBeFalsy();
});

