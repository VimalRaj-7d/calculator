function displayvalue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;

}
function cleardisplay(){
    document.getElementById("display").value="";
}
function calculateanswer(){
    var userinput=document.getElementById("display").value;
    var result=eval(userinput);
    document.getElementById("display").value=result;
}