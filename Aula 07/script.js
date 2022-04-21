function combo(valor) {
    alert(valor);
    }
    
const botao= document.querySelector("#send");
    botao.addEventListener ("click", function(e) {
    e.preventDefault();
const name = document.querySelector("#name");
const nome = name.value;
    let para = document.createElement('p');
    para.textContent = ('Seu nome é: ' + nome );
    document.body.appendChild(para);
    })