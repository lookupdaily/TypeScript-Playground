class FizzBuzz {
  run(size:number):string[] {
    let output:string[] = [];
    for (let i:number = 1; i <= size; i++) {
      if(i === 3) { 
        output.push("fizz");
      } else { 
        output.push(i.toString()); 
      };
    };
    return output;
  }
}

export default FizzBuzz