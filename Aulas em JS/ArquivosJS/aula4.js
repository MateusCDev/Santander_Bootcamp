let nome ="Mateus";
let sobrenome = "Cesar";
let nomeCompleto = nome.concat(sobrenome); //função que junta as strings
nomeCompleto = `${nome} ${sobrenome}`; //Forma melhor de concaternar, espaçar e pular linha uusando a crase e colocando as variaveis sobre sifrão e chaves
let frase = "Ola, tudo bem?";
let array = [];// inicio uma lista
let Pessoa = { // inicia o objeto com o nome dela de Pessoa com ela chaves : valores, 
    nome: "Mateus",
    idade:23,
    altura:1.71,
}
array.push(1,2,3);// incluo elementos na lista no final se quiser colocar no inicio é shift
array.pop(2);// exclui elementos no final da lista o inverso é unshift
console.log(Pessoa);
console.log(array);
console.log(frase.split(" "));// função que separa as palavras por um parametro ex : espaço
console.log(nomeCompleto, typeof nomeCompleto);// função typeof mostra o tipo de dado da variavel
console.log(nomeCompleto.length);//função length mostra o comprimento do dado;
console.log(frase.includes("Ola"));//  Verifica se o conteudo tem na string se tiver ele retorna True se não false