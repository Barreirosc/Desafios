let loginCadastrado = 'barreiros'
let senhaCadastrada = 'barreiros12345'

let maximoTentativas = 3
let tentativaAtual = 1

while (tentativaAtual <= maximoTentativas) {
  let loginInformado = prompt('Informe seu login')
  let senhaInformada = prompt('Informe sua senha')

  if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
    alert('Bem-vindo ao sistema, ' + loginInformado)

    // ========================================
  } else {
    if (tentativaAtual == 3) {
      alert('Número permitido de tentativas ultrapassado!')
    } else {
      alert('Login inválido. Tente novamente')
    }
  }

  // vai para a próxima tentativa
  tentativaAtual = tentativaAtual + 1
}
