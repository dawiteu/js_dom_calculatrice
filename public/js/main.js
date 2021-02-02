import {calcul,opers} from "./class/calcul.js";
import {dark} from "./class/bonus.js"; 

const btn = document.querySelectorAll("button"); 
const inf = document.querySelector("input[type=text]"); 
const chc = document.querySelector("span#switchcol"); 

// tab avec l'op courante ; 
let operCourr = []; 

let calculf=false; // le calcul est terminer ? 
let dejaunop = false; // est ce qu'ila d eja pris un operateur ? 


btn.forEach((e) =>{

    e.addEventListener("click", () => {
        if(calculf){
            inf.value="";
            calculf=false;
        }
        const action = e.innerHTML; // si nombre ou + - / etc .. 
        if(isNaN(action)){
            switch(action){
                case  "C": 
                    operCourr = []; 
                    inf.value=""; 
                break;
                case "X":
                    if(inf.value.length > 0 && operCourr.length > 0){
                        inf.value=inf.value.slice(0, inf.value.length-1);
                        operCourr.pop();  
                    }         
                break; 

                case "=":
                    if(operCourr.length > 0){
                        if(!isNaN(operCourr[0])){
                            opers.forEach(op =>{ 
                                if(operCourr.includes(op)){
                                    let toSplit = operCourr.join('').split(op); 
                                    inf.value = calcul(toSplit[0],toSplit[1],op);
                                    operCourr = [];
                                    calculf=true; 
                                    dejaunop=false;
                                }
                            })                        
                        }
                    }
                break;
                default:
                    if(operCourr.length > 0){
                        if(!dejaunop){ // on verifie s'il a deja pas d'operateur 
                            operCourr.push(action);
                            inf.value+=action;        
                            dejaunop=true;                
                        }
                    }else{
                        // c'est le premier, donc non. uniquement chifre pour premiere valeur du tableau d'operation.. 
                    }
                break;
            }
        }else{ //c'est un chifffre 
            operCourr.push(action);
            inf.value+=action;
        }
        console.log(operCourr); 
    });
});

//const chc = document.querySelector("span#switchcol"); 

chc.addEventListener("click", dark);