var input = document.getElementById('ucfrom');
var output = document.getElementById('ucto');
var inputType = document.getElementById('ucfromunit');
var resultType = document.getElementById('uctounit');
var option_from,option_to;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

 function myResult(){
    option_from = inputType.value;
    option_to = resultType.value;

    // convert meter into any Uint
    if(option_from === "m" && option_to==="m"){
        output.value = input.value ;
    }
    else if(option_from === "m" && option_to==="km"){
        output.value = Number(input.value)*0.001 ;
    }
    else if(option_from === "m" && option_to==="dm"){
        output.value = Number(input.value)*10 ;
    }
    else if(option_from === "m" && option_to==="cm"){
        output.value = Number(input.value)*100 ;
    }
    else if(option_from === "m" && option_to==="mm"){
        output.value = Number(input.value)*1000 ;
    }
    else if(option_from === "m" && option_to==="microM"){
        output.value = Number(input.value)*(1e+6) ;
    }
    else if(option_from === "m" && option_to==="nm"){
        output.value = Number(input.value)*(1e+9) ;
    }
    else if(option_from === "m" && option_to==="yd"){
        output.value = Number(input.value)*1.09361 ;
    }
    else if(option_from === "m" && option_to==="ft"){
        output.value = Number(input.value)*3.28084 ;
    }
    else if(option_from === "m" && option_to==="in"){
        output.value = Number(input.value)*39.3701 ;
    }

    //convert kilometer into any unit
    if(option_from === "km" && option_to==="km"){
        output.value = input.value ;
    }
    else if(option_from === "km" && option_to==="m"){
        output.value = Number(input.value)*1000 ;
    }
    else if(option_from === "km" && option_to==="dm"){
        output.value = Number(input.value)*10000 ;
    }
    else if(option_from === "km" && option_to==="cm"){
        output.value = Number(input.value)*100000 ;
    }
    else if(option_from === "km" && option_to==="mm"){
        output.value = Number(input.value)*(1e+6) ;
    }
    else if(option_from === "km" && option_to==="microM"){
        output.value = Number(input.value)*(1e+9) ;
    }
    else if(option_from === "km" && option_to==="nm"){
        output.value = Number(input.value)*(1e+12) ;
    }
    else if(option_from === "km" && option_to==="yd"){
        output.value = Number(input.value)*1093.61 ;
    }
    else if(option_from === "km" && option_to==="ft"){
        output.value = Number(input.value)*3280.84 ;
    }
    else if(option_from === "km" && option_to==="in"){
        output.value = Number(input.value)*39370.1 ;
    }

    //convert decimeter into any unit
    if(option_from === "dm" && option_to==="km"){
        output.value = Number(input.value)*(1e-4) ;
    }
    else if(option_from === "dm" && option_to==="m"){
        output.value = Number(input.value)*0.1 ;
    }
    else if(option_from === "dm" && option_to==="dm"){
        output.value = input.value ;
    }
    else if(option_from === "dm" && option_to==="cm"){
        output.value = Number(input.value)*10 ;
    }
    else if(option_from === "dm" && option_to==="mm"){
        output.value = Number(input.value)*100 ;
    }
    else if(option_from === "dm" && option_to==="microM"){
        output.value = Number(input.value)*100000 ;
    }
    else if(option_from === "dm" && option_to==="nm"){
        output.value = Number(input.value)*(1e+8) ;
    }
    else if(option_from === "dm" && option_to==="yd"){
        output.value = Number(input.value)*0.109361 ;
    }
    else if(option_from === "dm" && option_to==="ft"){
        output.value = Number(input.value)*0.328084 ;
    }
    else if(option_from === "dm" && option_to==="in"){
        output.value = Number(input.value)*3.93701 ;
    }

    //convert centimeter into any unit
    if(option_from === "cm" && option_to==="km"){
        output.value = Number(input.value)*(1e-5) ;
    }
    else if(option_from === "cm" && option_to==="m"){
        output.value = Number(input.value)*0.01 ;
    }
    else if(option_from === "cm" && option_to==="dm"){
        output.value = Number(input.value)*0.1 ;
    }
    else if(option_from === "cm" && option_to==="cm"){
        output.value = input.value ;
    }
    else if(option_from === "cm" && option_to==="mm"){
        output.value = Number(input.value)*10 ;
    }
    else if(option_from === "cm" && option_to==="microM"){
        output.value = Number(input.value)*10000 ;
    }
    else if(option_from === "cm" && option_to==="nm"){
        output.value = Number(input.value)*(1e+7) ;
    }
    else if(option_from === "cm" && option_to==="yd"){
        output.value = Number(input.value)*0.0109361 ;
    }
    else if(option_from === "cm" && option_to==="ft"){
        output.value = Number(input.value)*0.0328084 ;
    }
    else if(option_from === "cm" && option_to==="in"){
        output.value = Number(input.value)*0.393701 ;
    }

    //convert millimeter into any unit
    if(option_from === "mm" && option_to==="km"){
        output.value = Number(input.value)*(1e-6) ;
    }
    else if(option_from === "mm" && option_to==="m"){
        output.value = Number(input.value)*0.001 ;
    }
    else if(option_from === "mm" && option_to==="dm"){
        output.value = Number(input.value)*0.01 ;
    }
    else if(option_from === "mm" && option_to==="cm"){
        output.value = Number(input.value)*0.1 ;
    }
    else if(option_from === "mm" && option_to==="mm"){
        output.value = input.value ;
    }
    else if(option_from === "mm" && option_to==="microM"){
        output.value = Number(input.value)*1000 ;
    }
    else if(option_from === "mm" && option_to==="nm"){
        output.value = Number(input.value)*(1e+6) ;
    }
    else if(option_from === "mm" && option_to==="yd"){
        output.value = Number(input.value)*0.00109361 ;
    }
    else if(option_from === "mm" && option_to==="ft"){
        output.value = Number(input.value)*0.00328084 ;
    }
    else if(option_from === "mm" && option_to==="in"){
        output.value = Number(input.value)*0.0393701 ;
    }

    //convert micrometer into any unit
    if(option_from === "microM" && option_to==="km"){
        output.value = Number(input.value)*(1e-9) ;
    }
    else if(option_from === "microM" && option_to==="m"){
        output.value = Number(input.value)*(1e-6) ;
    }
    else if(option_from === "microM" && option_to==="dm"){
        output.value = Number(input.value)*(1e-5) ;
    }
    else if(option_from === "microM" && option_to==="cm"){
        output.value = Number(input.value)*(1e-4) ;
    }
    else if(option_from === "microM" && option_to==="mm"){
        output.value = Number(input.value)*0.001 ;
    }
    else if(option_from === "microM" && option_to==="microM"){
        output.value = input.value ;
    }
    else if(option_from === "microM" && option_to==="nm"){
        output.value = Number(input.value)*1000 ;
    }
    else if(option_from === "microM" && option_to==="yd"){
        output.value = Number(input.value)*(1.0936e-6) ;
    }
    else if(option_from === "microM" && option_to==="ft"){
        output.value = Number(input.value)*(3.2808e-6) ;
    }
    else if(option_from === "microM" && option_to==="in"){
        output.value = Number(input.value)*(3.937e-5) ;
    }

    //convert nanometer into any unit
    if(option_from === "nm" && option_to==="km"){
        output.value = Number(input.value)*(1e-12) ;
    }
    else if(option_from === "nm" && option_to==="m"){
        output.value = Number(input.value)*(1e-9) ;
    }
    else if(option_from === "nm" && option_to==="dm"){
        output.value = Number(input.value)*(1e-8) ;
    }
    else if(option_from === "nm" && option_to==="cm"){
        output.value = Number(input.value)*(1e-7);
    }
    else if(option_from === "nm" && option_to==="mm"){
        output.value = Number(input.value)*(1e-6) ;
    }
    else if(option_from === "nm" && option_to==="microM"){
        output.value = Number(input.value)*0.001 ;
    }
    else if(option_from === "nm" && option_to==="nm"){
        output.value = input.value ;
    }
    else if(option_from === "nm" && option_to==="yd"){
        output.value = Number(input.value)*(1.0936e-9) ;
    }
    else if(option_from === "nm" && option_to==="ft"){
        output.value = Number(input.value)*(3.2808e-9) ;
    }
    else if(option_from === "nm" && option_to==="in"){
        output.value = Number(input.value)*(3.937e-8) ;
    }

    //convert yard into any unit
    if(option_from === "yd" && option_to==="km"){
        output.value = Number(input.value)*0.0009144 ;
    }
    else if(option_from === "yd" && option_to==="m"){
        output.value = Number(input.value)*0.9144 ;
    }
    else if(option_from === "yd" && option_to==="dm"){
        output.value = Number(input.value)*9.144 ;
    }
    else if(option_from === "yd" && option_to==="cm"){
        output.value = Number(input.value)*91.44 ;
    }
    else if(option_from === "yd" && option_to==="mm"){
        output.value = Number(input.value)*914.4 ;
    }
    else if(option_from === "yd" && option_to==="microM"){
        output.value = Number(input.value)*914400 ;
    }
    else if(option_from === "yd" && option_to==="nm"){
        output.value = Number(input.value)*(9.144e+8) ;
    }
    else if(option_from === "yd" && option_to==="yd"){
        output.value = input.value ;
    }
    else if(option_from === "yd" && option_to==="ft"){
        output.value = Number(input.value)*3 ;
    }
    else if(option_from === "yd" && option_to==="in"){
        output.value = Number(input.value)*36 ;
    }

    //convert foot into any unit
    if(option_from === "ft" && option_to==="km"){
        output.value = Number(input.value)*0.0003048 ;
    }
    else if(option_from === "ft" && option_to==="m"){
        output.value = Number(input.value)*0.3048 ;
    }
    else if(option_from === "ft" && option_to==="dm"){
        output.value = Number(input.value)*3.048 ;
    }
    else if(option_from === "ft" && option_to==="cm"){
        output.value = Number(input.value)*30.48 ;
    }
    else if(option_from === "ft" && option_to==="mm"){
        output.value = Number(input.value)*304.8 ;
    }
    else if(option_from === "ft" && option_to==="microM"){
        output.value = Number(input.value)*304800 ;
    }
    else if(option_from === "ft" && option_to==="nm"){
        output.value = Number(input.value)*(3.048e+8) ;
    }
    else if(option_from === "ft" && option_to==="yd"){
        output.value = Number(input.value)*0.333333 ;
    }
    else if(option_from === "ft" && option_to==="ft"){
        output.value = input.value ;
    }
    else if(option_from === "ft" && option_to==="in"){
        output.value = Number(input.value)*12 ;
    }

    //convert inch into any unit
    if(option_from === "in" && option_to==="km"){
        output.value = Number(input.value)*(2.54e-5) ;
    }
    else if(option_from === "in" && option_to==="m"){
        output.value = Number(input.value)*0.0254 ;
    }
    else if(option_from === "in" && option_to==="dm"){
        output.value = Number(input.value)*0.254 ;
    }
    else if(option_from === "in" && option_to==="cm"){
        output.value = Number(input.value)*2.54 ;
    }
    else if(option_from === "in" && option_to==="mm"){
        output.value = Number(input.value)*25.4 ;
    }
    else if(option_from === "in" && option_to==="microM"){
        output.value = Number(input.value)*25400 ;
    }
    else if(option_from === "in" && option_to==="nm"){
        output.value = Number(input.value)*(2.54e+7) ;
    }
    else if(option_from === "in" && option_to==="yd"){
        output.value = Number(input.value)*0.0277778 ;
    }
    else if(option_from === "in" && option_to==="ft"){
        output.value = Number(input.value)*0.0833333;
    }
    else if(option_from === "in" && option_to==="in"){
        output.value = input.value ;
    }

 }
