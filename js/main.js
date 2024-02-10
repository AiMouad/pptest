function abso(val1, val2) {
    return Math.abs(val1 - val2);
}
const vv ="azer234tyu,;iopqhjklm*$w&xc.!v'b(-èn_15)=67:89/*sdfg-+"
function Password (vv){
    let pw = "";
for(i=0;i<8;i++){
    const j = Math.floor(Math.random() * vv.length);  //랜덤한 index
pw += vv[j];
// or pw += vv.charAt((Math.random() * vv.length)); //direct
}
return pw;
}
console.log(abso(3, 5));
console.log(abso(5, 3));
console.log(Math.cbrt(1));
console.log(Math.exp(0));
console.log(Math.sqrt(10));
const Pw = Password(vv);
console.log("The Password is:"+Pw);
//---------------------------------------------------
//if 
let  x = "cat";
let reply;
if (x) reply =`the name is ${x}`;
else reply=`there is no word in the sentence ${x}`;
console.log(reply);
function boolien (num) {
if(num == 0) console.log("false");
else if (num ==1) console.log("true");
else  console.log("Error!");
}
console.log(boolien(0));
console.log(boolien(5));
console.log(boolien(1));

function testSore(a,b){
    if  (a < 0 || a>20 ) return 'Don The  score is out of range';
    else{
    let grade ;
    if(a >= 17.5 )grade="A";
    else if( a>=12.5)grade="B";
    else if(a>=10)grade="C";    
    else if(a>=7.5)grade="D";
    else{
    if(b) grade="U";
    else grade="F";
    }
    return `Your score is ${a}, Grade is ${grade}.`;
}
}
console.log(testSore(17,false));
console.log(testSore(9));
console.log(testSore(0,true));
console.log(testSore(-4));
console.log(testSore(2,false));

//---------------------------------------------------