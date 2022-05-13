let oldPersonName = prompt('Quem é o mais velho?')
let ageOldPerson = prompt('Qual sua idade?')

let nameNewPerson = prompt('Quem é o mais novo?')
let ageNewPerson = prompt('qual sua idade?')

let ageDifference = ageOldPerson - ageNewPerson

alert(
  'Pessoa mais velha: ' +
    oldPersonName +
    '\n sua idade é: ' +
    ageOldPerson +
    ' anos.' +
    '\n\nPessoa mais nova é: ' +
    nameNewPerson +
    '\n sua idade é: ' +
    ageNewPerson +
    ' anos.' +
    '\n\nDiferença de idade entre os dois são de: ' +
    ageDifference
)
