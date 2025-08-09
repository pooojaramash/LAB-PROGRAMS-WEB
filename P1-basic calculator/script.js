function addition(){
let input1=parseFloat(document.getElementById("num1").value);
let input2=parseFloat(document.getElementById("num2").value);
let result=input1+input2
document.getElementById("res").innerHTML=result;
}
function subtract(){
    let input1=parseFloat(document.getElementById("num1").value);
    let input2=parseFloat(document.getElementById("num2").value);
    let result=input1-input2
    document.getElementById("res").innerHTML=result;
    
    }
    function multiplication(){
        let input1=parseFloat(document.getElementById("num1").value);
        let input2=parseFloat(document.getElementById("num2").value);
        let result=input1*input2
        document.getElementById("res").innerHTML=result;
        
        }
        function division(){
            let input1=parseFloat(document.getElementById("num1").value);
            let input2=parseFloat(document.getElementById("num2").value);
            let result=input1/input2
            document.getElementById("res").innerHTML=result;
            
            }