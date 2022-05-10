alert('Bem-vindo! A seguir pediremos que informe alguns dados.')

let name = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')

let idadeConfirmate = confirm('Sua idade é ' + idade + ' anos?')

alert(
  'Nome: ' +
    name +
    '\nIdade ' +
    idade +
    '\nIdade confirmada: ' +
    idadeConfirmate
)
