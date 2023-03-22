for(let i = 1; i < 101; i++){
  let Numb = i;
  
  if (!(i % 15)){
    Numb = "FizzBuzz"
  } 
  
  else if(!(i % 3)){
    Numb = "Fizz"
  }
  else if(!(i % 5)){
    Numb = "Buzz"
  }

  console.log(Numb)
}


