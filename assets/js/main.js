//Consumindo a API
const form = {
    email:document.querySelector('#email'),
    password:document.querySelector('#senha'),
    submit:document.querySelector('.js-btn'),
    messagem:document.querySelector('.input-mensagem--erro')
}

let button = form.submit.addEventListener('click',(e) => {
    e.preventDefault()
    
    const login = "https://test-final.b8one.academy/login"

    fetch(login,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            "Authorization":'Basic' + btoa(email),
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            email:form.email.value,
            password:form.password.value,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log({data})
        if(data === true){
            console.log('Login bem sucessido!')
            window.location.href = 'home.html'
        }else{
            console.log('Não digitou nada')
            form.email.classList.add('input-container--invalido')
            form.messagem.style.display='block'
        }
        })
})




// function valida(){
//     const email = document.querySelector('#email')
//     const mensagem = document.querySelector(".input-mensagem--erro")

//     email.addEventListener('blur',() => {
//         if(email.value == ""){
//             email.classList.add('input-container--invalido')
//             mensagem.style.display = "block"
//         }else{
//             email.classList.remove('input-container--invalido')
//             mensagem.style.display = "none"
//         }
//     })

    
// }
