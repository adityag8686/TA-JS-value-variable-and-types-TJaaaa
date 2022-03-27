// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
// let num = +prompt("Enter a number");
// if (num %2 == 0)
// {
//   console.log("number is even");
 
//  } else
// {  console.log("number is odd");
// }


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
// let num1 = +prompt("Enter First number");
// let num2 = +prompt("Enter Second number");
// if (num1>num2)
// {
//   console.log( num1 + "is max");
//   } 
// else
// {   console.log( num2 + "is max");
//   }



// 3. Convert the above code using`?` terniary operator
// let num1 = +prompt("Enter First number");
// let num2 = +prompt("Enter Second number");
// let max = num1>num2 ? `${num1} :is max` :  `${num2} :is max`;
// alert(max)


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
// let name = prompt("enter your house name");
// if (name == "stark")
// {
//   console.log("Winter is coming");
// }
// else if (name == "Lannister")
// {
//   console.log("A lannister always pays his debt");
// }
// else
// {
//   console.log(" All men must die");
// }
// // 5. Convert the above code using`?` terniary operator
// let name = prompt("enter your house name");
// console.log(name == "stark" ? "Winter is coming" : name == "Lannister" ? "A lannister always pays his debt" : " All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let number = +prompt("enter the month you wish");
// switch (number)
// {
//   case 1:
//     console.log("January 31");
//     break;
//     case 2:
//     console.log("Feb 29");
//     break;
//     case 3:
//     console.log("March 31");
//     break;
//     case 4:
//     console.log("April 30");
//     break;
//     case 5:
//     console.log("May 31");
//     break;
//     case 6:
//     console.log("June 30");
//     break;
//     case 7:
//     console.log("July 31");
//     break;
//     case 8:
//     console.log("August 31");
//     break;
//     case 9:
//     console.log("Sep 30");
//     break;
//     case 10:
//     console.log("Oct 31");
//     break;
//     case 11:
//     console.log("Nov 30");
//     break;
//     case 12:
//     console.log("Dec 31");
// }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
// let salary = +prompt("Enter you salary");
// if (salary<= 20000)
// {
//   tax = (.1 * salary);
//   salary = salary - tax;
// }
// else if(salary<=40000)
// {
//   tax = (.2 * salary);
//   salary = salary - tax;
// }
// else{
//   tax = (.3 * salary);
//   salary = salary - tax;
// }
// console.log("salary=" + salary);
//  if..else vs switch
// let salary = +prompt("Enter you salary");
// switch(true)
// {
//   case salary<= 20000 : 
//    tax = (.1 * salary);
//    salary = salary - tax
//   console.log( salary);
//   break;
//   case salary<= 40000 : 
//    tax = (.2 * salary);
//    salary = salary - tax
//   console.log( salary);
//   break;
//   case salary<= 60000 : 
//    tax = (.3 * salary);
//    salary = salary - tax
//   console.log( salary);
//   break;

// }
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("enter your number");
if (marks>100)
{
  console.log("Marks cant be above 100")
}
else if (marks > 80 && marks<100)
{
  console.log("Grade A");
}
else if (marks > 50 && marks<80)
{
  console.log("Grade B");
}
else if (marks > 30 && marks<15)
{
  console.log("Grade C");
}
else{
  console.log("Grade D");
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let user = prompt(`What is the weather like outside?`);
switch(user)
{
  case sunny:
    alert(`Wear a T-shirt`);
    break;
    case rainy:
    alert(`Don't forget to take your raincoat`);
    break;
    case hot:
    alert(`Get a hanky`);
    break;
    case freezing:
    alert(`Get your sweeter on`);
    break;
    default :
    alert(`Not a valid input `);
    break;
}