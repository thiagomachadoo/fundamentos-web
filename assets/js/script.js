//var = escopo global
//let = escopo local
//const = escopo global (variavel constante)
/*
por tag: getElementByTagName()
por id: getElementeById()
por Nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector()

Case sensitive = Reconhece letras maiusculas e minusculas
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    if(nome.Value.length < 3){
        alert('nome inválido')
    }
}
