function Enviar() {

    var nota1Fun = parseFloat(document.getElementById("nota1").value);

    var nota2Fun = parseFloat(document.getElementById("nota2").value);
 
    var mediaFun = (nota1Fun + nota2Fun) / 2;

    var nomeFun = document.getElementById("nome");

    if(mediaFun >= 6){

            var aprovacao = "\nO aluno está aprovado!"
            
        } else {

            var aprovacao = "\nO aluno está reprovado!"

        }

    if(nota1Fun > 10 || nota2Fun > 10) {

            alert('A nota deve ser menor ou igual a 10')

        } else {

            alert('Olá, ' + nomeFun.value + '\nSua primeira nota é: ' + nota1Fun + '\nSua segunda nota é: ' + nota2Fun + '\nA média é: ' + mediaFun + aprovacao);
        }
}