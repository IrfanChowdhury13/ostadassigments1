
// Calculation Function
function calculate() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let operators = document.getElementById("operator-id").value;
    let errorText = document.querySelector('.error-text');



    if (operators === "+") {
        document.getElementById("result-calculate").value = input1 + input2;
    }

    if (operators === "-") {
        document.getElementById("result-calculate").value = input1 - input2;
    }

    if (operators === "*") {
        document.getElementById("result-calculate").value = input1 * input2;
    }

    if (operators === "/") {
        document.getElementById("result-calculate").value = input1 / input2;
    }


    if (!isNaN(input1) && !isNaN(input2) ) {
        if (input1 > 0 && input2 > 0) {
            document.querySelector('.error-box').classList.remove('alert-danger')
            document.querySelector('.error-box').classList.add('alert-success')
            errorText.innerHTML = 'Your Result Is : '+ document.getElementById("result-calculate").value;
        } else {
            document.querySelector('.error-box').classList.add('alert-danger')
            errorText.innerHTML = 'Please enter a number greater than 0';
        }
    } else {
        document.querySelector('.error-box').classList.add('alert-danger')
        errorText.innerHTML = 'Please enter a valid number.';
    }
}
