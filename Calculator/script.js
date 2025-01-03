function addnumber(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const result=num1+num2;
    document.getElementById("result").textContent="Result:"+result;

}

function subtractnumber(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const result=num1-num2;
    document.getElementById("result").textContent="Result:"+result;
}

function multiplynumber(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const result=num1*num2;
    document.getElementById("result").textContent="Result:"+result;
}

function dividenumber(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    const result=num1/num2;
    document.getElementById("result").textContent="Result:"+result;
}