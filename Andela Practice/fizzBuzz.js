function fizzBuzz(val)  { 

    if (typeof val == 'number')
      if (val % 3 == 0 && val % 5 == 0) 
        return "fizzBuzz";
      
        else if (val % 5 == 0) 
        return "buzz";
          
        else if (val % 3 == 0) 
        return "fizz";
      
        else 
        return val ;

    else
      console.log("Numbers only");  
}     
    
console.log (fizzBuzz(3));
console.log (fizzBuzz(5));
console.log (fizzBuzz(15));
console.log (fizzBuzz(16));
console.log (fizzBuzz('a'));