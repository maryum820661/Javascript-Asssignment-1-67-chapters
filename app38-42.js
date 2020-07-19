
//Assignment # 38 till 42

//1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 
function Power(a,b)
{
result=Math.pow(a,b);
return result;
}

document.write("The Power calculated  is " + Power(4,3)+"\n");

//2.Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not

function LeapYear(year)
{

    if((year%4 && year%100 && year%400)===0)
    {
        document.write("Its a Leap year");
    }
    else
    {
        document.write("\n It's not a Leap Year");
    }
}

LeapYear(2016);

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
function CalcSum(a,b,c)
{
    var sum;
    sum=(a+b+c)/2;
    return sum;
}

function CalcArea(a,b,c)
{
var S=CalcSum(a,b,c);
var area=S*(S-a)*(S-b)*(S-c);
document. write("\n");
document.write("The area of the triangle is "+ area);
}

document. write("\n");
CalcArea(6,2,5);

//4.Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
 
function Average(a,b,c)
{
    var avg=(a+b+c)/3;
    return avg;
}

function Percentage(a,b,c)
{
    var total=100;
    var average=Average(a,b,c);
    var Percentage=(average/total)*100;
    return Percentage;

}

function MainFunc(a,b,c)
{
    var percentage=Percentage(a,b,c);
    document.write("The percentage of the student is "+percentage);
}

MainFunc(89,90,97);

//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now

function IndexCal(letter)
{
    var sentence="Maryum";

document.write((sentence[letter]));

}

IndexCal("a");

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 
const notAStringMessage = "Not a string. Please provide an argument that is a string."
const noLetterString = "Please write a string that has letters in it."
const zeroLengthStringMessage = "Please write a string 1 or more characters long."
function isAValidString(string)
{
    if(typeof string!== "string"){
    return notAStringMessage
    }
    else if (string.length === 0){
    return zeroLengthStringMessage
    }
    else if(/[a-zA-Z]/.test(string) === false){
    return noLetterString
}
}

function hasVowels(string){
    let word = string.toLowerCase()
    if(/[aeiouy]/.test(word)){
         return true
      } else {
         return false
      }
    }
function vowelCut(string){
    if (isAValidString(string) === notAStringMessage ||  
      isAValidString(string) === zeroLengthStringMessage || 
      isAValidString(string) === noLetterString){ 
      return isAValidString(string)
    }
    if (hasVowels(string))
    {
       if(string.length == 1)
       {
         return ""
       } 
       else
       {
         let characterArray = string.split("")
         return characterArray.map(character => {
             if(/[aeiouyAEIOUY]/.test(character)){
                character = ""
             } else 
             {
                return character
             }
         }).join("");
      }
    } 
    else
    {
        return string
    }
  }

  document.write(vowelCut(" My name is Maryum"));

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());

  //8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
  function distanceMeter(km)
  {
  var meters=km*1000;
  return meters;

  }
  function distanceFeet(km)
  {

    var feet=km*3280.8;
    return feet;
  }
  function distanceInches(km)
  {
      var inches=km*39370.1;
      return inches;
  }
  function distanceCentimeters(km)
  {
      var centimeters=km*100000;
      return centimeters;
  }
  document.write("\n"+distanceMeter(12));
  document.write("\n"+distanceFeet(19));
  document.write("\n"+distanceInches(2));
  document.write("\n"+distanceCentimeters(5));

  //9.Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour
  function Overtime(time) 
  {

    var overtime=12*1.5*time;
    return overtime;
  }
 document.write("\n"+Overtime(21));


 //10.A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer


 function  NotesCalcultation(money)
 {
  
    hundreds=(money/100);
    fifty=((money%100)/50);
    tens=(((money%100)%50)/10);
    document.write("The no of hundreds in the money is"+hundreds);
    document.write("The no of fifty note in the  money is"+fifty);
    document.write("The no of tens  notes in the money is"+tens);
 }


 NotesCalcultation(490);
