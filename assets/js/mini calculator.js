let op1 =parseInt(prompt("enter first oprand"));
let op2 =parseInt(prompt("enter second oprand"));
let operators = prompt("enter an operators(+, -, *,/)")
 if(isNaN(op1) || isNaN(op2)){
    alert("error:both input must be number")
}
else if(operators=="+"){
    alert(`${op1} ${operators} ${op2} =${op1+op2}`)
}
else if(operators=="-"){
    alert(`${op1} ${operators} ${op2} =${op1-op2}`)
}
else if(operators=="*"){
    alert(`${op1} ${operators} ${op2} =${op1*op2}`)
}
else if(operators=="/"){
    alert(`${op1} ${operators} ${op2} =${op1/op2}`)
}
else if(operators==""){
    alert("please input operators")
}
else if(operators!="+, -, *, /"){
    alert("please select given operators")
}
