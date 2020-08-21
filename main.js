function convert() {
    unit = document.getElementById("unit").value;
    value = document.getElementById("input").value;


	// if (value == 0) {
	// 	alert("Invalid Number");
	// 	return false;
	// }    

    dollerPrice = 0;
    kiloPrice = 0;

    if (unit == "Milligram") {
        miligramConverter(value, dollerPrice, kiloPrice);
    } else if (unit == "Gram") {
        gramConverter(value, dollerPrice, kiloPrice);
    } else if (unit == "Kilogram") {
        kilogramConverter(value, dollerPrice, kiloPrice);
    } else{
    	alert("Invalid input");
    }
}

function miligramConverter(value, d, e) {
    document.getElementById("miligram").value = value;
    document.getElementById("gram").value = value / 1000;
    document.getElementById("kilo").value = value / 1000000;
}

function gramConverter(value, d, e) {
    rupee = value * 1000;
    kilo = value / 1000;
    document.getElementById("miligram").value = rupee;
    document.getElementById("gram").value = value;
    document.getElementById("kilo").value = kilo;
}

function kilogramConverter(value, d, e) {
    rupee = document.getElementById("input").value * 1000;
    gram = value / 1000;
    document.getElementById("miligram").value = rupee;
    document.getElementById("gram").value = gram;
    document.getElementById("kilo").value = value;
}

function resetForm() {
	document.getElementById("weightForm").reset();
}