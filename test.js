let operation_string = '3×3×3';

operation_string = operation_string.replaceAll('÷', '/').replaceAll('×', '*');
// operation_string = eval(operation_string.replace('÷', '/').replace('×', '*'));
console.log(operation_string);