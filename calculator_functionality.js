let operation_string = ''; // we initialize the variable. we need it to be a string.

function appendSymbol(symbol) { // with this function we append when a symbol is pressed. this if for both numbers and operator.s
    operation_string += symbol; // we append the symbol to our string
    document.getElementById('result').value = operation_string; // then we get the 'result' id in the document. in this case this is the input, which has id as result. we assign its value to this.
}

function calculateResult() {
    // we can use try and catch to simplify the things here.

    if (operation_string.length == 0); // if the length of the operation_string is zero, then don't do any operations. there can be the problem when we try to evaluate an empty string, giving us strange results, so it's better to just not operate on nothing.

    else {
        try {
            // with eval, we can evaluate a string as javascript code. this is very useful, as we can ust introduce the string inside the eval and get a result. if there's an error in trying to evaluate, we have the try and catch, so in the catch we can assign an error if something bad happened.
            operation_string = eval(operation_string.replace('÷', '/').replace('×', '*')); // here, in the operation_string, we jsut replace some symbols in case the user entered them. with replace, we can specify which symbol we want to change for what. the first parameter is the symbol that will be changed, and the second parameter ios the symbol we will get.
            // we use replace two times, as we want to replace two times the symbols, for both division and multiplication
            document.getElementById('result').value = operation_string; // finally, if everything goes correctly, we just update the value of the result id.
        }
        catch {
            document.getElementById('result').value = "Error"; // if we get an error (the error can only happen in the eval of the operation_string) then we put an error message in the result id.
        }

    }
}

function eraseAll() { // this function is to erase everything of the operation_string. this is used when the C or C E buttons are pressed, to erase everything
    operation_string = '';
    document.getElementById('result').value = operation_string;
}

const result_input = document.querySelector('#result'); // we get the element by id, so we can have it as a const.

// then we can create an event for this element that we assigned previously, just like events in c#. in this case, we want an event of type 'input', so everytime something is input in the result element id, then this event will fire and what's inside of this event will be executed.
result_input.addEventListener('input', (e) => {
    operation_string = document.getElementById('result').value; // in this case we assign the operation_string to the value of the element. we do this so when the user writes something as input, then we update this variable too.

    operation_string =  operation_string.replace('/', '÷').replace('*', '×'); // as the user can introduce both * and /, we want to replace them with the symbols for just a better presentation. we replace * and / for the respective symbols. after all, in the calculateresult() function this symbols will be passed again to / and * respectively.

    document.getElementById('result').value = operation_string; // we then now assign the new operation_string to our value.
});

function eraseLastCharacter() {

    operation_string = document.getElementById('result').value; // we reassign this in case the operation_string has not been updated before.

    if (operation_string.length == 0); // if the operation_string length is equal to zero (meaning we have an empty string) then don't erase the last character, as errors could happen.

    else {
        operation_string = operation_string.slice(0, -1); // is operation_string length is not zero, then we get all the characters minus the last one, "erasing" the last one. the slice(start, end) gets the string, from the starting position (inclusive) to the end positiob (exclusive), so this means that it will end before the ned position. in this case, putting -1 means the last position, so the string will get all the string before the last position.
        document.getElementById('result').value = operation_string; // we then now assign what we get to the result id, so we update it.
    }

}