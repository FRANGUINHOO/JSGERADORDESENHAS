const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (let i=0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    
    // CHAMADA DA FUNÇÃO DA BARRA (Adicionado aqui!)
    calculaForca();
}

// NOVA FUNÇÃO PARA A BARRA DE FORÇA
function calculaForca() {
    // 1. Seleciona a barra de força (ajuste a classe se for diferente no seu HTML)
    const barraForca = document.querySelector('.barra'); 
    
    // Se a senha estiver vazia (nenhum checkbox marcado), a barra some
    if (campoSenha.value === "" || campoSenha.value.includes("undefined")) {
        barraForca.style.width = "0%";
        barraForca.style.backgroundColor = "transparent";
        return;
    }

    // 2. Lógica simples de força baseada no tamanho da senha
    if (tamanhoSenha < 8) {
        // FRACA: Menor que 8 caracteres
        barraForca.style.width = "30%";
        barraForca.style.backgroundColor = "#e74c3c"; // Vermelho
    } else if (tamanhoSenha >= 8 && tamanhoSenha < 12) {
        // MÉDIA: Entre 8 e 11 caracteres
        barraForca.style.width = "60%";
        barraForca.style.backgroundColor = "#f1c40f"; // Amarelo/Laranja
    } else if (tamanhoSenha >= 12) {
        // FORTE: 12 ou mais caracteres
        barraForca.style.width = "100%";
        barraForca.style.backgroundColor = "#2ecc71"; // Verde
    }
}