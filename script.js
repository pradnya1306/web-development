var output=document.querySelector('.output');
var result=document.querySelector('.result')
var keys=document.querySelectorAll('button');

for (val of keys){
    val.addEventListener("click",calculate);
}
function calculate(){
        let buttonText=this.innerText
        console.log(buttonText)
        if(buttonText==="AC"){
            output.innerText="";
            result.innerText="0"; 
            return;
    
        }
        if(buttonText==="="){
            result.textContent=eval(output.innerText)
        }
        else{
            output.textContent+=buttonText;
            return;
        }
    }


// keys.forEach(val=>{
//     val.addEventListener("click",calculate);
// })

// function calculate(){
//     let buttonText=this.innerText
//     console.log(buttonText)
//     if(buttonText==="AC"){
//         output.innerText="";
//         result.innerText="0"; 
//         return;

//     }
//     if(buttonText==="="){
//         result.textContent=eval(output.innerText)
//     }
//     else{
//         output.textContent+=buttonText;
//         return;
//     }
// }

