
// var nome = "Maira";
// var idade = 29;
// var idade2 = 10;
// var frase = "Japão é o melhor time"
// alert(nome + " tem " + idade + " anos");
// console.log(nome);
// console.log(idade);
// alert(frase.toUpperCase());
// alert(frase.replace("Japão", "Brasil"))

// var lista = ["moça", "pera", "laranja"];
// console.log(lista[1]);
// lista.push("uva");
// console.log(lista.reverse())
// //lista.pop();
// console.log(lista.join(" - "));

// var fruta = [{ nome:'maçã', cor:'vermelha'}, { nome:'uva', cor:'roxa' }];
// console.log(fruta)
// alert(fruta[1].cor)

// var idade = prompt('Qual a sua idade?')
// var idadeMinima = 18;
// if (idade >= idadeMinima){
//     alert('maior de idade')
// } else {
//     alert('menor de idade')
// }

// var count = 0;
// while (count < 5){
//     console.log(count);
//     alert(count);
//     count++
// }

// var count;
// for (count = 0; count<=5; count++){
//     alert(count)
// }

// var d = new Date();
// console.log(d.getMonth()+1);
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getUTCDate());

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(soma(5, 10))
// alert(setReplace("Vai Japão", "Japão", "Brasil!"))

// function validarIdade(idade){
//     var validar;// = true;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua Idade?")
// console.log(validarIdade(idade))

function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one")
}