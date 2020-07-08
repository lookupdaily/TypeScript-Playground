class FizzBuzz {
  run(size:number):string[] {
    let output = [];
    for (let i:number = 1; i <= size; i++) {
      output.push(this.convert(i))
    };
    return output;
  }

  private convert(number: number): string {
    if(number % 3 === 0) return "fizz";
    if(number === 5) return "buzz";
    return number.toString(); 
  }
}

export default FizzBuzz