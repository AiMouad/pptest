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
function switche(a){
    switch(a){
        case "a": return "allumentation";
        case "b": return "brillance";
        case "c": return "cat";
        default : return "its not A or B or C...";

    }
}
console.log(switche("c"));
//---------------------------------------------------
//Ternary Operators
let soup = "CHicken Noodle Soup";
let isCustomerBAnned = false;
let soupAccess = isCustomerBAnned ? "soory , No soup for you!" : soup ?`Yes, we have ${soup} today`:"Sorry, No soup today"
let response = soup ?"Yes, We have soup":"Sorry, No soup today"
console.log(soupAccess);
let res = 55;
let gr = res>80 ? "A": res>60 ? "B": res>40 ? "C": res>20 ? "D" : "F";
console.log(gr);
//---------------------------------------------------
// user input
/*
//alert("HELLO")
//let boulienn =confirm ("ok ===True\nCancel===False");
//MMoconsole.log(boulienn);
let name = prompt("Youe NAme Mr please");
if(name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());

}
else console.log("You didn't enter you name.");
*/
//---------------------------------------------------
// First Game
let playGame = confirm("SHall we play rock,papper, or scissors?");
if(playGame){
    //PLay Game
    let x = prompt("Enter : (rock or papper or scissors)");
    if (x==="rock" ||x==="papper"||x==="scissors"){
        let y = Math.floor((Math.random()*3)+1);
        let z;
        switch (y){
            case 1 : console.log("Bot :rock");z="rock";break;
            case 2 : console.log("Bot :papper");z="papper";break;
            case 3 : console.log("Bot :scissors");z="scissors";break;
            default : console.log("Erreur!");
        }
        if(x===z) console.log("Null");
        else{
            if(x==="Rock"){
                if(z==="papper") console.log("Bot win!");
                else  console.log("You win!");
            }
            else if(x==="papper"){
                if(z==="scissors") console.log("Bot win!");
                else  console.log("You win!");
            }
            else if(x==="Rock"){
                if(z==="papper") console.log("Bot win!");
                else  console.log("You win!");
            }
            else{
                if(z==="Rock") console.log("Bot win!");
                else  console.log("You win!");
            }
        }
    }
    else console.log("Erreur in your enter !!!");
}
else    alert("Mybe Next Time :)")

