# Fizzbuzz

fizzbuzz outputs a sequence
takes a 'size' argument to define sequence size
starts at 1

example usage:  
```node
fizzBuzz = new FizzBuzzGame() 
fizzBuzz.run(size:number) => Array<string>
```
I/O
| Input   | Output                                                                                   |
| ------- | ---------------------------------------------------------------------------------------- |
| 2  | ["1","2"]                                                                                |
| 3  | ["1","2","fizz"]                                                                         |
| 5  | ["1","2","fizz","4","buzz"]                                                              |
| 6  | ["1","2","fizz","4","buzz","5","fizz"]                                                   |
| 10 | ["1","2","fizz","4","buzz","5","fizz","7","8","9","buzz"]                                |
| 15 | ["1","2","fizz","4","buzz","5","fizz","7","8","9","buzz","11","12","13","14","fizzbuzz"] |
| 30 | output[29]="fizzbuzz"                                                                    |
