function clr(){
    var inp=document.getElementById("inp");
    inp.value="";
}
function ans(){
    var inp=document.getElementById("inp");
    inp.value=eval(inp.value);
}
function cut(){
    var inp=document.getElementById("inp");
inp.value=inp.value.slice(0,inp.value.length-1)
}
function percent(){
    var inp=document.getElementById("inp");
var str =inp.value;
var flag=0;
let i=inp.value.length-1;
for( i;i>=0;--i){
    if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/'){
        flag=1;
        inp.value=str.slice(0,i+1)+parseInt(str.slice(i+1,str.length))/100;
       break;
    }
}
console.log(i);
if(i==-1){
inp.value=(inp.value)/100;
}
}