// The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division
function Calculator(num1, num2, operator){
    switch (operator) {
        case '+':
            return Number(num1) + Number(num2)
        case '-':
            return Number(num1) - Number(num2)
        case '*':
            return Number(num1) * Number(num2)
        case '/':
            return Number(num1) / Number(num2)  
        default:
            return "An invalid operator was entered please try again" 
    }
}

firstnumber = prompt("Enter a number")
secondnumber = prompt("Enter another number")
operation = prompt("Enter an operation to perform. The operation has to be one of the following: '+', '-', '*', or '/'")
alert(Calculator(firstnumber, secondnumber, operation))
