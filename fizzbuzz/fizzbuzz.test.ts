import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
  it('generates a sequence of one simple number', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.run(1)).toEqual(["1"]);
  });

  it('generates a sequence of two simple numbers', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.run(2)).toEqual(["1", "2"]);
  });

  // it('fizz is 3', () => {
  //   const fizzBuzz = new FizzBuzz()
  //   expect(fizzBuzz.run(3)).toEqual(["1","2","fizz"])
  // })

})