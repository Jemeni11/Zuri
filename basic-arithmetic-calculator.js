// The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division
function Calculator(num1, num2, operator){
    switch (operator) {
        case '+':
            return Number(num1) + Number(num2)
        case '-':
            return Number(num1) - Number(num2)
        case '*':
            return Number(num1) * Number(num2)
        case '÷':
            return Number(num1) / Number(num2)  
        default:
            return "An invalid operator was entered please try again" 
    }
}
