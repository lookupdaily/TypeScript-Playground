import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
  let fizzBuzz;

  beforeEach(() => fizzBuzz = new FizzBuzz());
  it('generates a sequence of one simple number', () => {
    expect(fizzBuzz.run(1)).toEqual(["1"]);
  });

  it('generates a sequence of two simple numbers', () => {
    expect(fizzBuzz.run(2)).toEqual(["1", "2"]);
  });

  it('3 is fizz', () => {
    expect(fizzBuzz.run(3)).toEqual(["1","2","fizz"]);
  });

  it('5 is buzz', () => {
    expect(fizzBuzz.run(5)).toEqual(["1","2","fizz","4","buzz"])
  })

  it('multiples of 3 are fizz', () => {
    const fizzBuzzSix = fizzBuzz.run(6)[5]
    expect(fizzBuzzSix).toEqual("fizz")
  })

});