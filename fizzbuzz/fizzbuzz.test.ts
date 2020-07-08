describe('fizzbuzz', () => {
  it('returns a sequence of simple numbers', () => {
    fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.run(size=2)).toEqual(["1","2"])
  })
})