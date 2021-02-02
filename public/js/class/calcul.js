export let opers = ['+','-','x','/','r^2','Puiss'];

export function calcul(nb1, nb2, op){
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
                case "r^2":
                    result = Math.sqrt(nb1);
                break;
                case "Puiss":
                    result = Math.pow(nb1,nb2);
                break;
            }
        }
    });
    return result;
}