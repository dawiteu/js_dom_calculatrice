const btn = document.querySelectorAll("button"); 
const inf = document.querySelector("input[type=text]"); 

// tab avec l'op courante ; 

let operCourr = []; 


btn.forEach((e) =>{

    e.addEventListener("click", () =>{
        const action = e.innerHTML; // si nombre ou + - / etc .. 

        if(isNaN(action)){
            console.log('operation'); 

            if(action == "C"){ 
                operCourr = []; 
                inf.value=""; 
            }else{
                switch (action){
                    case "x":
                        if(inf.value.length > 0 && operCourr.length > 0){
                            inf.value=inf.value.slice(0, 1);
                            operCourr.pop();  
                        }
                    break; 
                }
            }


        }else{
            operCourr.push(action);
            inf.value+=action;
        }
        
        console.log(operCourr); 


    })


});
