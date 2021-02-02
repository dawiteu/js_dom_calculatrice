const btn = document.querySelectorAll("button"); 
const inf = document.querySelector("input[type=text]"); 

// tab avec l'op courante ; 
let operCourr = []; 

// les operateurs ;;; 

let opers = ['+','-','x','/'];

function calcul(nb1, nb2, op){
    console.log('cal');

    opers.forEach(e => {
        if(e == op){
            console.log('e et op '); 
            
            switch(op){
                case "+":
                    return nb1+nb2;
                case "-":
                    return nb1-nb2;  
                case "x":
                    return nb1*nb2; 
                case "/":
                    return nb1/nb2;
            }
        }
    });
}


btn.forEach((e) =>{

    e.addEventListener("click", () =>{
        const action = e.innerHTML; // si nombre ou + - / etc .. 

        if(isNaN(action)){
            console.log('operation'); 
            
            switch(action){
                case  "C": 
                    operCourr = []; 
                    inf.value=""; 
                break;
                case "x":
                    if(inf.value.length > 0 && operCourr.length > 0){
                        inf.value=inf.value.slice(0, 1);
                        operCourr.pop();  
                    }         
                break; 

                case "=":
                    if(operCourr.length > 0){
                        opers.forEach(op =>{ 
                            if(operCourr.includes(op)){
                                let toSplit = operCourr.join('').split(op); 
                                inf.value=calcul(toSplit[0],toSplit[1],op);
                                console.log(`${toSplit[0]} et ${toSplit[1]} => Op: ${op} `);
                                
                            }
                        })
                    }
                break;
                default:
                    operCourr.push(action);
                    inf.value+=action;
                break;
            }
        }else{
            operCourr.push(action);
            inf.value+=action;
        }
        
        console.log(operCourr); 


    })


});
