
const senhainput = document.querySelector ("#senha")
const emailinput = document.querySelector ("#email")
const cadastrarinput = document.querySelector ("#cadastrar")


console.log(senhainput)
console.log(emailinput)



cadastrarinput.addEventListener("click", (e) =>{

//    e.preventDefault();
//console.log(emailinput.value);
//console.log(senhainput.value);


    if(!emailinput.value){
        emailinput.classList.remove("form-green")
        emailinput.classList.add("form-red")
    }
    if(senhainput.value < 8){
        
        senhainput.classList.remove("form-green")
        senhainput.classList.add("form-red")
    }
    if(emailinput.value){

        emailinput.classList.remove("form-red")

        emailinput.classList.add("form-green")
    }
    if(senhainput.value >= 8){

        senhainput.classList.remove("form-red")

        senhainput.classList.add("form-green")
    }

})


console.log("teste")
