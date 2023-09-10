/*var nome = window.prompt('Qual o teu nome?')
//A Variavel receber o resultado do window prompt
window.alert('Prazer em te conhecer, ' + nome)
*/
var n1 = Number.parseInt(window.prompt('Digite um numero'))
var n2 =Number.parseInt(window.prompt('Digite outro numero'))
//A Variavel receber o resultado do window prompt
var soma = n1 + n2
window.alert(soma)


// Number.parseInt e Number.parseFloat converte string para numero, para que o sinal de adição não se confunda sobre o que fazer, podemos usar so o comando Number

//string converte numero para string

var nome = window.prompt("Qual o seu nome?")
document.write(`Seu nome é lindo ${nome}`)