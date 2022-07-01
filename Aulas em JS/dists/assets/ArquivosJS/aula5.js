/*function elementos ()
{
    return arguments;
}
console.log(elementos(1,2, "string", [1,2]));// mostra os parametros dos argumentos de uma função*/

/*function sum (y, x , z){
    return y+x+z;
 }
 const NUMBERS = [1,2,3];
 
 console.log(sum(...NUMBERS));// spread faz com que uma array dentor de uma função seja um elemento indepedente ou seja todos os elementos da função dentro da array seram  parametros  */

 /*function valores(...valores ){
    console.log(`Seus valores : ${valores}`)
}
valores(10,20,30,40,50);// exemplo de rest ond eu posso pegar varios elementos em uma função declarada numa array*/

/*function animal(id){
    switch(id){
        case 1:
            return "cachorro";
        case 2:
            return "gato";
        default:
            return "lobo";
  }
}
console.log(animal(3));// uso do switch/case obrigatoriamente tem que ter um (default) no final*/

/*const NOME = {
    primeiroNome: "Mateus",
    sobrenome: "Cesar",
    nomeCompleto : function(){
        return ` Seu nome completo é : ${this.primeiroNome} ${this.sobrenome}`;//o uso do this se refere ao objeto Pai dentro de um metodo (função dentro do objeto se chama função)
    }
};   
console.log(NOME.nomeCompleto());*/

/*const Sub={
    num1:10,
    num2:20
};
function sub(a,b){
    console.log(this.num1 - this.num2 - a - b);
}

sub.call(Sub,5,6); // Metodo Call chama os os valores do objeto que foram inseridos como parametros de uma função junto com valores fixos por virgulas ja o Aplyy tem que separar por colchete sendo um array*/

/*const hello = () => { // Arrow Fuction simplifica a função com uma seta => se a função tiver uma linha ´pde usar sem o return e as chaves se tiver mais linha tem que usar as chaves e o return
    return "Hello World";
} 
console.log(hello);*/
