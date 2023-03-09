const string = require('./string');

test('Calculates word count of "Chess" to be 5', () => {
    expect(string('Chess')).toBe(5);
})

test('Calculates word count of chessmaster to be more than 10 which is not acceptable', () => {
    expect(string('Chessmaster')).toBe('conditions not met');
})

test('Calculates word count of an empty string to be less than 1 which is not acceptable', () => {
    expect(string('')).toBe('conditions not met');
})
