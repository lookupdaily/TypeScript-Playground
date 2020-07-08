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

  it('fizz is 3', () => {
    expect(fizzBuzz.run(3)).toEqual(["1","2","fizz"]);
  });

});