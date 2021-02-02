const btn = document.querySelectorAll("button"); 
const inf = document.querySelector("input[type=text]"); 
const chc = document.querySelector("span#switchcol"); 

let dark = false; // default est clair ; 

// tab avec l'op courante ; 
let operCourr = []; 

let calculf=false; // le calcul est terminer ? 

// les operateurs ;;; 

let opers = ['+','-','x','/'];

function calcul(nb1, nb2, op){
    let result; 
    opers.forEach(e => {
        if(e == op){
            nb1 = parseFloat(nb1); 
            nb2 = parseFloat(nb2); 
            switch(op){
                case "+":
                    result = nb1+nb2;
                break;
                case "-":
                    result = nb1-nb2;  
                break;
                case "x":
                    result =  nb1*nb2; 
                break;
                case "/":
                    result =  nb1/nb2;
                break;
                
            }
        }
    });
    return result;
}


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
                                }
                            })                        
                        }
                    }
                break;
                default:
                    operCourr.push(action);
                    inf.value+=action;
                break;
            }
        }else{ //c'est un chifffre 
            operCourr.push(action);
            inf.value+=action;
        }
        console.log(operCourr); 
    });
});


chc.addEventListener("click", () => {
    if(!dark){
        document.body.style.backgroundColor="black"; 
        dark = true;
    }else{
        document.body.style.backgroundColor="#ccc";  
        dark=false; 
    }
});