function numerosFun() {
    let titulo = document.createElement("h1");
    titulo.textContent = "Contagem";
    document.body.appendChild(titulo);
    let paragrafo = document.createElement("p");
    for(var i=1; i<=10; i++){
        
        paragrafo.textContent += i + " ";
        
    }
    document.body.appendChild(paragrafo);
    }   
    const numerosFor = document.getElementsByClassName('numeros');
    for(var i = 0; i < numerosFor.length ; i++) {
    numerosFor[i].addEventListener('click', numerosFun);
    }

function debitoTexto() {
    let titulo = document.createElement("h1");
    titulo.textContent = "O que é Débito Técnico?";
    document.body.appendChild(titulo);
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software.";
    document.body.appendChild(paragrafo);
    }
    const debitoFor = document.getElementsByClassName('debito');
    for(var i = 0; i < debitoFor.length ; i++) {
    debitoFor[i].addEventListener('click', debitoTexto);
    }

function sonarTexto() {
    let link = document.createElement("a");
    window.location.href = "https://blog.myscrumhalf.com/sonar-apoiando-a-qualidade-do-desenvolvimento-de-software/";
    link.dataset['target'] = '_blank';  
    }
    const sonarFor = document.getElementsByClassName('sonar');
    for(var i = 0; i < sonarFor.length ; i++) {
    sonarFor[i].addEventListener('click', sonarTexto);
    }

function jenkinsTexto() {
    let link = document.createElement("a");
    window.location.href = "https://blog.mandic.com.br/artigos/5-perspectivas-para-impulsionar-a-produtividade-usando-jenkins/";
    }
    const jenkinsFor = document.getElementsByClassName('jenkins');
    for(var i = 0; i < jenkinsFor.length ; i++) {
    jenkinsFor[i].addEventListener('click', jenkinsTexto);
    }