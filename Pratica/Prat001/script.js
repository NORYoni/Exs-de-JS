
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    //if usado apenas para mudar o plural da frase 
    if(hora == 1){
        msg.innerHTML = `Agora são ${hora} hora`
    }else{
        msg.innerHTML = `Agora são ${hora} horas`
    }

    //if usado para determinar qual mensagem aparecera
    if (hora >= 0 && hora < 12 ){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#8C4E03'
    }else if(hora >=12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BF2604'
        //Boa Tarde
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#023059'
        //Boa noite
    }
}