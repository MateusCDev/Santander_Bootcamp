console.log("Hello World");
const MAIS = document.getElementById("adicionar");// atribuo o meu ID do html para constante
const MENOS = document.getElementById("subtrair");
MAIS.addEventListener("click",increment);//adiciono o evento addEventListner que ao clicar chamo minha function
MENOS.addEventListener("click",decrement);
 var currentNumberPai = document.getElementById("currentNumber");//pego o elemento html e anexo na variavel 
 var count = 0;// inicializo o contador

 function increment(){
    if (count <10){
    count = count + 1;
    currentNumberPai.innerHTML = count;// joga o valor do contador dentro do elemento html manipulando ele!
    }
 }
 function decrement(){
    if (count >0){
    count = count - 1;
    currentNumberPai.innerHTML = count;
    }
 }
