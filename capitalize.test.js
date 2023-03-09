const capitalize = require('./capitalize');

test('Capitalize first letter', () => {
    expect(capitalize('chess')).toBe('Chess');
})

test('Capitalize first letter', () => {
    expect(capitalize('4hess')).toBe('4hess');
})

test('Capitalize first letter', () => {
    expect(capitalize('/hess')).toBe('/hess');
})

test('Capitalize first letter', () => {
    expect(capitalize('Chess')).toBe('Chess');
})