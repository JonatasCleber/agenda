const servico = "cardiologia"
const diaSeman = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"]

let agenda = "Segunda a Sexta"


let hoje = new Date()
let dia = hoje.getDay()
let posicao = diaSeman[dia]

if (dia == 0 || dia == 6 ){
    console.log(`hoje é ${posicao} estamos fechado!`)
}else{
    console.log(`hoje é ${posicao} estamos aberto!`)
    console.log(servico)
    console.log(agenda)
    console.log(typeof dia)
}

const preco = 100
const numero = 100
const outro = 100


const total = preco + numero
const cabe = total >= outro

console.log(total)
console.log(cabe)

if (preco && numero == outro){
    console.log("tudo igual")
}else{
    console.log("numeros diferentes")
}

const verdade = true
const falso = false

console.log(!verdade)
console.log(!falso)