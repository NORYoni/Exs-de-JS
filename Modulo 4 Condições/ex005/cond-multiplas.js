//diferente o if e else, cond multiplas servem pra mais de um tipo de valores fixos
/*Estrutura 
    switch(expressão){
        case valor 1:

            break
        case valor 2:

            break
        case valor 3:

            break
        default:

            break
    }
*/

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia invalido')
}