let input=document.querySelector(".num input");
let Submit_btn=document.querySelector("#sub_btn");
let clear_btn=document.querySelector("#clr_btn");
let result=document.querySelector(".result");
input.addEventListener("click",()=>{
    input.setAttribute("placeholder","")
})
Submit_btn.addEventListener("click",()=>{
    let n=parseInt(input.value);
    if(isNaN(n))alert("please enter your number");
    else if(n<=1){
        result.innerHTML=n+" is not a prime number"

    }
    else{
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                result.innerHTML=n+" is not a prime number"
                return;

            }
        }
        result.innerHTML=n+" is a prime number"

    }
    
   

})
clear_btn.addEventListener("click",()=>{
    input.value='';
    input.setAttribute('placeholder',"enter the number you want to check")
})

