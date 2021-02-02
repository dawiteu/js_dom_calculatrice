export let darked = false; 

export function dark() {
    if(!darked){
        document.body.style.backgroundColor="black"; 
        darked = true;
    }else{
        document.body.style.backgroundColor="#ccc";  
        darked=false; 
    }
}