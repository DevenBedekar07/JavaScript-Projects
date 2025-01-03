let input=document.getElementById("userInput");



function log(){
    let  message=input.value;
    console.log("log :",message);   
}

function warn(){
    let message=input.value;
    console.warn("warn:",message);   
}

function error(){
    let message=input.value;
    console.error("Error: ", message);
}