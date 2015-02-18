function add_numbers(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1) || isNaN(num2)){
        alert("Please follow instructions!");
        return false;
    }
        else{
        return (num1 + num2);
    }
    
}
function subtract_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        return (num1 - num2);
    }
}
function multiply_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
        else{
        return (num1 * num2);
    }
}
function divide_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        if(num2>0){
            return (num1 / num2);
        }
        else {
            alert("you cannot divide by zero!");
            return false;
        }
    }
}
//function to execute operation
function calculator(){
    
    switch(operator) {
        case '+':
            //add
            result = add_numbers(number_array[0], number_array[1]);
            break;
        case '-':
            //subtract 
            result = subtract_numbers(number_array[0], number_array[1]);
            break;
        case '*':
            //multiply
            result = multiply_numbers(number_array[0], number_array[1]);
            break;
        case '/':
           //divide
            result = divide_numbers(number_array[0], number_array[1]);
            break;
        default:
            alert("Invalid operator!");
            break;        
    }
    //result
    if(result!==false){
        document.querySelector('#result').value = result;
        reset_calculator();
    } else{
            var errorItem = document.querySelector('#error');
            var itemContent = errorItem.innerHTML;
            errorItem.innerHTML = '<p>Error!</p>';
            //document.querySelector('#result').value = "Error!";
    }
}

var number_array = ['', ''];
var number_index = 0;
var operator = '';
var result = null; 


function add_number(digit){
    if(result !== null) {
        result = null;
        document.querySelector('#result').value='';
    }
    document.querySelector('#input').value += digit;
    number_array[number_index]+= digit;
}

function add_operator(input_operator){
    
    
    if(result!=null){
        number_array[0] = result; 
        result = null; 
        number_array[1] = '';
        
    }
    number_index = 1;
    document.querySelector('#input').value += input_operator;
    operator = input_operator;
}

function reset_calculator(){
    document.querySelector('#input').value = '';
    number_array=['', ''];
    number_index = 0;
}