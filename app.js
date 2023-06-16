const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const numpad = [zero,one,two,three,four,five,six,seven,eight,nine];
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const equals = document.getElementById("equals");
const resultbox = document.getElementById("result");
const percent = document.getElementById("percent");
const operators =  [plus,minus,multiply,division, percent];
const point = document.getElementById("point");
const resetbutton = document.getElementById("reset");
const switcher = document.getElementById("switcher");
let firstnumber = null;
let secondnumber = null;
let operator = null;

resetbutton.addEventListener("click", function() {
    firstnumber = null;
    secondnumber = null;
    operator = null;
    resultbox.innerText = 0;
})



point.addEventListener("click", function() {
    if (!resultbox.innerText.includes(".")) {
    if (secondnumber == null && firstnumber != null) {
        firstnumber+=".";
        resultbox.innerText = firstnumber;
    }


    if (firstnumber != null && secondnumber != "0" && secondnumber != null) {
        secondnumber += ".";
        resultbox.innerText = secondnumber;
    }


    if (firstnumber != null && secondnumber == "0") {
        secondnumber = "0.";
        resultbox.innerText = secondnumber;
    }
}
});

numpad.forEach((num) => {
    num.addEventListener("click", function() {


        if (secondnumber == null && firstnumber != null) {
            if (firstnumber != "0") {
                firstnumber+=num.innerText;
            }
            resultbox.innerText = firstnumber;
        }

        if (firstnumber == null) {
            firstnumber = num.innerText;
            resultbox.innerText = firstnumber;
        }

        if (firstnumber != null && secondnumber != "0" && secondnumber != null) {
            secondnumber += num.innerText;
            resultbox.innerText = secondnumber;
        }


        if (firstnumber != null && secondnumber == "0") {
            secondnumber = num.innerText;
            resultbox.innerText = secondnumber;
        }


    })
})


operators.forEach((op) => {
    op.addEventListener("click", function() {
        if (firstnumber != null && secondnumber == null) {
            secondnumber = "0";
        switch(op) {
            case plus:
                operator = "plus";
                break;

            case minus:
                operator = "minus";
                break;
                    
            case multiply:
                operator = "multiply";
                break;
                        
            case division:
                operator = "division";
                break;
            
            case percent:
                operator = "percent";
                break;
            }
        }
    })
})

function reset(result) {
    firstnumber = result;
    secondnumber = null;
    operator = null;
}


equals.addEventListener("click", function() {
    if (firstnumber != null && secondnumber != null && operator != null) {
        switch(operator) {
            case "plus":
                addFunction();
                break;

            case "minus":
                minusFunction();
                break;
                    
            case "multiply":
                multiplyFunction();
                break;
                        
            case "division":
                divideFunction();
                break;
            
            case "percent":
                percentFunction();
                break;
            }
    }
})


switcher.addEventListener("click", function() {

    if (firstnumber != null && secondnumber == null) {
        firstnumber = firstnumber * -1;
        resultbox.innerText = firstnumber;
    }

    if (secondnumber != null && firstnumber == null) {
        secondnumber = secondnumber * -1;
        resultbox.innerText = secondnumber;
    }

}) 

function addFunction() {
    let result = parseFloat(firstnumber) + parseFloat(secondnumber);
    resultbox.innerText = result;
    reset(result);
}
function minusFunction() {
    let result = parseFloat(firstnumber) - parseFloat(secondnumber);
    resultbox.innerText = result;
    reset(result);
}
function multiplyFunction() {
    let result = parseFloat(firstnumber) * parseFloat(secondnumber);
    resultbox.innerText = result;
    reset(result);
}
function divideFunction() {
    let result = parseFloat(firstnumber) / parseFloat(secondnumber);
    resultbox.innerText = result;
    reset(result);
}
function percentFunction() {
    let result = parseFloat(secondnumber) * parseFloat(firstnumber / 100);
    resultbox.innerText = result;
    reset(result);
}