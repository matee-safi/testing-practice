const Calculator = require('./calculator');

describe("Can perform Addition", () => {
    test('4 + 5 = 9', () => {
        expect(Calculator.sum(4, 5)).toBe(9);
    })
    test('0 + 5 = 5', () => {
        expect(Calculator.sum(0, 5)).toBe(5);
    })
    test('8 + 3 = 11', () => {
        expect(Calculator.sum(3, 8)).toBe(11);
    })
})

describe("Can perform Subtraction", () => {
    test('4 - 5 = -1', () => {
        expect(Calculator.subtract(4, 5)).toBe(-1);
    })
    test('0 - 5 = -5', () => {
        expect(Calculator.subtract(0, 5)).toBe(-5);
    })
    test('8 - 3 = 5', () => {
        expect(Calculator.subtract(8, 3)).toBe(5);
    })
})

describe("Can perform Multiplication", () => {
    test('4 * 5 = 20', () => {
        expect(Calculator.multiply(4, 5)).toBe(20);
    })
    test('0 * 5 = 0', () => {
        expect(Calculator.multiply(0, 5)).toBe(0);
    })
    test('8 * 3 = 24', () => {
        expect(Calculator.multiply(8, 3)).toBe(24);
    })
})

describe("Can perform Division", () => {
    test('4 / 5 = 0.8', () => {
        expect(Calculator.devide(4, 5)).toBe(0.8);
    })
    test('0 / 5 = 0', () => {
        expect(Calculator.devide(0, 5)).toBe(0);
    })
    test('8 / 3 = 2.6666666666666665', () => {
        expect(Calculator.devide(8, 3)).toBe(2.6666666666666665);
    })
})