let H = 0;
let M = 0;
let S = 0;
let MS = 0;

let intervalMillSeconde;
let intervalSeconde;
let intervalMinute;
let intervalHeure;
function Millseconde(){
    if(MS ==999){
        MS = 0;

    }
   MS += 1
    document.getElementById("MS").innerHTML=MS 
}
 function Seconde(){
    if(S==60){
        S=0
    }
    S +=1
    document.getElementById("S").innerHTML=S 
 }
 function Minute(){
    if(M== 59){
        M= 0
    }
     M+=1
    document.getElementById("M").innerHTML=M 
 }
 function Heures(){
    if(H==23){
        H = 0
    }
     H +=1
    document.getElementById("H").innerHTML=H 
 }
 function start(){
 intervalHeure = setInterval(Heures ,360000);
 intervalMinute = setInterval(Minute ,60000);
 intervalSeconde = setInterval(Seconde ,1000);
 intervalMillSeconde = setInterval(Millseconde ,1);
 }
 function stop(){
    clearInterval(intervalMillSeconde)
    clearInterval(intervalSeconde)
    clearInterval(intervalMinute)
    clearInterval(intervalHeure)
 }
 function reset(){
    stop();
    H = 0
    M = 0
    S = 0
    MS = 0
    document.getElementById("H").innerHTML ="00 :"
    document.getElementById("M").innerHTML ="00 :"
    document.getElementById("S").innerHTML ="00 :"
    document.getElementById("MS").innerHTML ="00"
 }
