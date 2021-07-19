const add = (a, b) => a + b;

const generateGreeting = (name) => {
    return `Hello ${name}`
}

test('add two numbers', () => {
    const result = add(3,4);

    expect(result).toBe(7);
})

test('greet julz', () => {
    const result = generateGreeting('julz');

    expect(result).toBe('Hello julz')
})