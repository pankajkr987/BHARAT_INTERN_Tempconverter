
function convertinputto() {
    let inputdegree = parseInt(document.getElementById("degree").value);
    
    let inputtype = document.querySelector("#options").value;
    let conversiontype = document.querySelector("#conv-to").value;
    console.log(inputdegree);
    console.log(inputtype);
    let result;
    switch (inputtype) {
        case 'C':
            result = cTo(inputdegree, conversiontype);
            break;
        case 'F':
            result = fTo(inputdegree, conversiontype);
            break;
        case 'K':
            result = kTo(inputdegree, conversiontype);
            break;
    }
    document.getElementById("output").innerText = "Result is : " + result.toFixed(2) + " "+conversiontype;
    console.log(result);

}
var sub = document.querySelector("#submit");
sub.addEventListener("click",()=>{
    convertinputto();
});

//farhenite to any 
function fTo(inputvalue, conversiontype) {
    let temp ;
    switch (conversiontype) {
        case 'F':
            temp = inputvalue;
            break;
        case 'C':
            temp = eval((inputvalue - 32) * (5 / 9));
            break;
        case 'K':
            temp = eval((inputvalue + 459.67) * (5 / 9));
            break;
    }
    return temp;
}

//celcius to any
function cTo(inputvalue, conversiontype) {
    let temp ;
    switch (conversiontype) {
        case 'C':
            temp = inputvalue;
            break;
        case 'F':
            temp = eval(inputvalue * (9 / 5) + 32);
            break;
        case 'K':
            temp = eval((inputvalue + 273.15));
            break;
    }
    return temp;
}
//kelvin to any
function kTo(inputvalue, conversiontype) {
    let temp ;
    switch (conversiontype) {
        case 'K':
            temp = inputvalue;
            break;
        case 'C':
            temp = eval(inputvalue - 273.15);
            break;
        case 'F':
            temp = eval((inputvalue - 273.15) * (9 / 5));
            break;
    }
    return temp;
}
