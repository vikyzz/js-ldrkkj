//functions

//To display the data in console
function display(name = 'vignesh' , age = '21')//default values
{
  console.log('hello' +`${' '} ${name}`);
}

display('vicky','20');
//output: hello vicky


//Addition
function Addition(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for addition')
  }
  else
  {
    console.log(num1 + num2)
  }
}

Addition(10,20);
//output: 30

//Subtraction
function Subtraction(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for Subtraction')
  }
  else
  {
    return(num1 - num2)
  }
}

console.log(Subtraction(10,20))
//output: -10

//Multiplication
function Multiplication(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for Multiplication')
  }
  else
  {
    return(num1 * num2)
  }
}

console.log(Multiplication(10,20))
//output: 200

//Division
function Division(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for Division')
  }
  else
  {
    return(num1 / num2)
  }
}

console.log(Division(10,20))
//output: 0.5

//Power
function Power(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for Power')
  }
  else
  {
    return(num1 ** num2)
  }
}

console.log(Power(10,20))
//output: 1000000000000000000000

//Moduloo
function Moduloo(num1 , num2)
{
  if(isNaN(num1) || isNaN(num2))
  {
    console.warn('Enter valid values for Moduloo')
  }
  else
  {
    return(num1 % num2)
  }
}

console.log(Moduloo(10,20))
//output: 10

//CompareStrings
function CompareStrings(num1 = 'hello' , num2 = 'hello')
{
  if(!isNaN(num1)  || !isNaN(num2))
  {
    console.warn('Enter valid values for CompareStrings')
  }
  else
  {
    return(num1 === num2)
  }
}

console.log(CompareStrings('hello','world'))
//output: false


//CompareNumber
function CompareNumber(num1 = 10 , num2 = 10)
{
  if(isNaN(num1)  || isNaN(num2))
  {
    console.warn('Enter valid values for CompareNumber')
  }
  else
  {
    return(num1 === num2)
  }
}

console.log(CompareNumber(10,20))
//output: false


//GreatorIndex
function GreatorIndex(num1  , num2 )
{
  if(!isNaN(num1)  || !isNaN(num2))
  {
    console.warn('Enter valid values for GreatorIndex')
  }
  else
  {
    return(num1.lastIndexOf(num2))
  }
}

console.log(GreatorIndex('hello' , 'l'))
//output: 3


//Vowels
function Vowels(num1)
{
  if(!isNaN(num1))
  {
    console.warn('Enter valid values for Vowels')
  }
  else if(num1.includes('a','e','i','o','u'))
  {
    return('Vowel')
  }
  else{
    return('Not vowel')
  }
}

console.log(Vowels('a'))
//output: Vowel


//PrimeNumber
function PrimeNumber(num1)
{
  if(isNaN(num1))
  {
    console.warn('Enter valid values for PrimeNumber')
  }
  
  else{
      if(num1 === 1)
      return false
      else if(num1 === 2)
      return true
      else
      {
        let prime = true
        for(let i = 2 ; i < num1/2 ; i++)
        {
          if(num1/i === 0)
          prime = false
        }

        return prime
      }
  }
}

console.log(PrimeNumber(7))
//output: true


//compareValues
function compareValues(num1 = 10 , num2 = 10)
{
  if(isNaN(num1)  || isNaN(num2))
  {
    console.warn('Enter valid values for compareValues')
  }
  else
  {
    return((num1===num2)?true:false)
  }
}

console.log(compareValues(10,20))
//output: false













