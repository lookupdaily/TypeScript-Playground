import FizzBuzz from './fizzbuzz'

describe('fizzbuzz', () => {
  it('returns a sequence of simple numbers', () => {
    const fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.run(2)).toEqual(["1","2"])
  })
})