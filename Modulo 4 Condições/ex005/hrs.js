var agora = new Date()
var horas =  agora.getHours()
console.log(`Agore é exatamente: ${horas}`)
if (horas <= 12){
    console.log('Bom Dia!!')
}else if(horas >= 19 || horas < 5){
    console.log('Boa Noite!!')
}else{
    console.log('Boa Tarde!!')
}