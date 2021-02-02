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
                                    //console.log(toSplit);
                                    let resultat = calcul(toSplit[0],toSplit[1],op);
                                    inf.value = resultat;
                                    operCourr = [];
                                    let stringResult = resultat.toString(); 
                                    stringResult = stringResult.split('');
                                    stringResult.forEach(e => operCourr.push(e) );
                                    calculf=true; 
                                    dejaunop=false;
                                }
                            })                        
                        }
                    }
                break;
                case ".":
                    operCourr.push(action);
                    inf.value+=action;   
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



// change le theme de la calculette : soit noir soir clair ; 
chc.addEventListener("click", dark);