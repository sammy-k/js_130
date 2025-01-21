const Car = require("./car");

describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
  test("has no headlights", () => {
    let car = new Car();
    expect(car.headlights).toBeUndefined();
  })
});


  test('objects have save props and vals', () => {
    expect({a: 1, b: 2}).toEqual({a: 1, b: 2})
  });


// Set up the necessary objects.
// Execute the code against the object we're testing.
// Assert the results of execution.
// Tear down and clean up any lingering artifacts.