# Fizzbuzz

fizzbuzz outputs a sequence
takes a 'size' argument to define sequence size
starts at 1

example usage:  
```node
fizzBuzz = new FizzBuzzGame() 
fizzBuzz.run(size = 100)
```
I/O
| Input   | Output                                                                                   |
| ------- | ---------------------------------------------------------------------------------------- |
| size=2  | ["1","2"]                                                                                |
| size=3  | ["1","2","fizz"]                                                                         |
| size=5  | ["1","2","fizz","4","buzz"]                                                              |
| size=6  | ["1","2","fizz","4","buzz","5","fizz"]                                                   |
| size=10 | ["1","2","fizz","4","buzz","5","fizz","7","8","9","buzz"]                                |
| size=15 | ["1","2","fizz","4","buzz","5","fizz","7","8","9","buzz","11","12","13","14","fizzbuzz"] |
| size=30 | output[29]="fizzbuzz"                                                                    |
