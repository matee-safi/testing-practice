const capitalize = require('./capitalize');

test('Capitalize first letter', () => {
    expect(capitalize('chess')).toBe('Chess');
})