const display = document.getElementById("output");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        let result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    }
    catch(error){
        display.value="Error";
    }
}